# Build stage
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

# Copy project files
COPY ["src/Picko.API/Picko.API.csproj", "src/Picko.API/"]
COPY ["src/Picko.Application/Picko.Application.csproj", "src/Picko.Application/"]
COPY ["src/Picko.Domain/Picko.Domain.csproj", "src/Picko.Domain/"]
COPY ["src/Picko.Infrastructure/Picko.Infrastructure.csproj", "src/Picko.Infrastructure/"]

RUN dotnet restore "src/Picko.API/Picko.API.csproj"

# Copy remaining source code
COPY . .

# Build
RUN dotnet build "src/Picko.API/Picko.API.csproj" -c Release -o /app/build

# Publish stage
FROM build AS publish
RUN dotnet publish "src/Picko.API/Picko.API.csproj" -c Release -o /app/publish

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS runtime
WORKDIR /app
COPY --from=publish /app/publish .

EXPOSE 5000
ENV ASPNETCORE_URLS=http://+:5000
ENTRYPOINT ["dotnet", "Picko.API.dll"]
