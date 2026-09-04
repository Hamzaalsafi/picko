# Picko Backend Architecture

## Overview

This is a Clean Architecture .NET 10 solution for a restaurant discovery and food ordering application ("Picko"). The solution follows a layered architecture with strict dependency rules.

## Solution Structure

```
backend/
├── src/
│   ├── Picko.API/           # Presentation layer (ASP.NET Core Web API)
│   ├── Picko.Application/   # Application layer (use cases, CQRS, MediatR)
│   ├── Picko.Domain/        # Domain layer (entities, value objects, enums, exceptions)
│   └── Picko.Infrastructure/# Infrastructure layer (EF Core, PostgreSQL, persistence)
├── tests/
│   ├── Picko.UnitTests/     # Domain & application logic tests
│   └── Picko.IntegrationTests/ # API + DB integration tests (Testcontainers)
├── Picko.slnx               # Solution file
├── Dockerfile               # Multi-stage container build
└── docker-compose.yml       # Local dev environment (PostgreSQL + API + Frontend)
```

## Layer Dependencies

```
Picko.API
    ↓ references
Picko.Application  ←→  Picko.Infrastructure
    ↓ references
Picko.Domain
```

- **Domain** has no external dependencies (pure .NET)
- **Application** references Domain + MediatR + FluentValidation + EF Core abstractions
- **Infrastructure** references Application + Npgsql EF Core provider
- **API** references Application + Infrastructure

## Domain Layer (`Picko.Domain`)

### Core Concepts

- **Entities**: `Restaurant`, `MenuItem` (inherit `BaseEntity` with `Id`, `CreatedAtUtc`, `UpdatedAtUtc`)
- **Value Objects**: `Money` (amount + currency), `Address` (street, city, state, zip, country)
- **Enums**: `CuisineType` (11 cuisine categories)
- **Exceptions**: `DomainException` for domain rule violations

### Key Rules

- Entities protect invariants via private setters + factory methods/constructors
- Value objects are immutable records with validation in constructors
- No ORM-specific attributes — configuration lives in Infrastructure

## Application Layer (`Picko.Application`)

### CQRS with MediatR

All use cases implemented as Commands (writes) or Queries (reads):

| Feature | Commands | Queries |
|---------|----------|---------|
| Restaurants | `CreateRestaurant`, `UpdateRestaurant`, `DeleteRestaurant`, `AddMenuItem` | `GetRestaurants` (paged), `GetRestaurantById`, `GetRestaurantMenu` |

### Pipeline Behaviors

1. **LoggingBehavior** — logs request/response names
2. **ValidationBehavior** — runs FluentValidation validators, throws `ValidationException` on failure

### Cross-cutting

- `IApplicationDbContext` — abstraction over EF Core DbContext for persistence
- `NotFoundException`, `ValidationException` — mapped to HTTP 404/400 by middleware
- `PagedResult<T>` — standard pagination wrapper

## Infrastructure Layer (`Picko.Infrastructure`)

### Persistence

- `AppDbContext` — implements `IApplicationDbContext`, uses Npgsql for PostgreSQL
- Entity configurations via `IEntityTypeConfiguration<T>` in `Configurations/`
- Value objects mapped as **complex properties** (EF Core 10 JSON columns)
- Automatic audit fields (`CreatedAtUtc`, `UpdatedAtUtc`) in `SaveChangesAsync`
- `DesignTimeDbContextFactory` for `dotnet ef migrations` without running the app

### DI Registration

```csharp
services.AddInfrastructure(configuration) // in Picko.Infrastructure
```

Adds `AppDbContext` (scoped) and registers it as `IApplicationDbContext`.

## API Layer (`Picko.API`)

### Controller-based Endpoints

All endpoints are implemented as standard ASP.NET Core Controllers:

```
GET    /api/restaurants?searchTerm&page&pageSize
GET    /api/restaurants/{id}
GET    /api/restaurants/{id}/menu
POST   /api/restaurants
PUT    /api/restaurants/{id}
DELETE /api/restaurants/{id}
POST   /api/restaurants/{id}/menu
GET    /api/health
```

### Error Handling

`ExceptionMiddleware` catches exceptions and returns RFC 7807 ProblemDetails:

| Exception | Status | Response |
|-----------|--------|----------|
| `NotFoundException` | 404 | `{ title, detail, traceId }` |
| `ValidationException` | 400 | `{ title, errors: { field: [messages] }, traceId }` |
| Unhandled | 500 | Generic error with traceId |

### Configuration

- `appsettings.json` — base config (DB connection, `Database:MigrateOnStartup: false`)
- `appsettings.Development.json` — dev overrides (detailed logging, `MigrateOnStartup: true`)
- Connection string overridden via `ConnectionStrings__DefaultConnection` env var (docker-compose)

### CORS

Configured to allow `http://localhost:3000` (frontend).

### Startup Migrations

On app start (when `Database:MigrateOnStartup=true`):
```csharp
using var scope = app.Services.CreateScope();
await scope.ServiceProvider.GetRequiredService<AppDbContext>().Database.MigrateAsync();
```

## Testing

### Unit Tests (`Picko.UnitTests`)

- Pure domain logic tests (no DI, no DB)
- Tests: `RestaurantTests` (create, add/remove menu items, rating clamping, updates), `MoneyTests` (validation, equality)
- Run: `dotnet test tests/Picko.UnitTests`

### Integration Tests (`Picko.IntegrationTests`)

- **Real PostgreSQL** via Testcontainers (`postgres:17-alpine`)
- Spins up container per test class, applies migrations automatically
- Tests full HTTP request/response cycle against controllers
- Fixture: `PostgreSqlFixture` (IAsyncLifetime) manages container + WebApplicationFactory
- Run: `dotnet test tests/Picko.IntegrationTests` (requires Docker)

## Local Development

### Prerequisites

- .NET 10 SDK
- Docker (for PostgreSQL + Testcontainers)

### Run with Docker Compose

```bash
docker compose up -d
# API at http://localhost:5000
# Swagger at http://localhost:5000/swagger
# Frontend at http://localhost:3000
```

### Run Locally (with local Postgres)

```bash
# Start Postgres (or use docker compose up -d postgres)
dotnet run --project src/Picko.API
```

### Database Migrations

```bash
cd backend
dotnet ef migrations add InitialCreate --project src/Picko.Infrastructure --startup-project src/Picko.API
dotnet ef database update --project src/Picko.Infrastructure --startup-project src/Picko.API
```

### Run Tests

```bash
# Unit tests (fast, no Docker)
dotnet test tests/Picko.UnitTests

# Integration tests (requires Docker)
dotnet test tests/Picko.IntegrationTests
```

## Key Design Decisions

| Decision | Rationale |
|----------|-----------|
| Controller-based API | Team familiarity, better tooling, explicit routing |
| MediatR for CQRS | Decouples handlers from controllers, enables pipeline behaviors |
| EF Core with complex properties | Modern EF Core 10 JSON column mapping for value objects |
| Testcontainers for integration tests | Real DB, no shared state, CI-friendly |
| FluentValidation + pipeline behavior | Centralized validation, clean handlers |
| ProblemDetails for errors | Standard RFC 7807, consistent error shape |

## Future Extensibility Points

- **Authentication/Authorization** — add JWT middleware, policies
- **Additional Features** — Orders, Users, Reviews (follow existing Restaurants pattern)
- **Event Publishing** — MediatR notifications → domain events → message bus
- **Caching** — `IDistributedCache` in query handlers
- **API Versioning** — `Microsoft.AspNetCore.Mvc.Versioning`