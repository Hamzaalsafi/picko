using MediatR;
using Picko.Application.Common.Interfaces;
using Picko.Domain.Entities;
using Picko.Domain.Enums;
using Picko.Domain.ValueObjects;

namespace Picko.Application.Restaurants.Commands;

public class CreateRestaurantCommandHandler : IRequestHandler<CreateRestaurantCommand, Guid>
{
    private readonly IApplicationDbContext _context;

    public CreateRestaurantCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<Guid> Handle(CreateRestaurantCommand request, CancellationToken cancellationToken)
    {
        var entity = new Restaurant(
            request.Name,
            request.Description,
            Enum.Parse<CuisineType>(request.Cuisine, ignoreCase: true),
            new Address(request.Street, request.City, request.State, request.ZipCode, request.Country),
            request.PhoneNumber,
            request.ImageUrl);

        _context.Restaurants.Add(entity);

        await _context.SaveChangesAsync(cancellationToken);

        return entity.Id;
    }
}