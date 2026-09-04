using MediatR;
using Microsoft.EntityFrameworkCore;
using Picko.Application.Common.Exceptions;
using Picko.Application.Common.Interfaces;
using Picko.Domain.Entities;
using Picko.Domain.Enums;
using Picko.Domain.ValueObjects;

namespace Picko.Application.Restaurants.Commands;

public class UpdateRestaurantCommandHandler : IRequestHandler<UpdateRestaurantCommand>
{
    private readonly IApplicationDbContext _context;

    public UpdateRestaurantCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task Handle(UpdateRestaurantCommand request, CancellationToken cancellationToken)
    {
        var entity = await _context.Restaurants
            .SingleOrDefaultAsync(r => r.Id == request.Id, cancellationToken)
            ?? throw new NotFoundException(nameof(Restaurant), request.Id);

        entity.Update(
            request.Name,
            request.Description,
            Enum.Parse<CuisineType>(request.Cuisine, ignoreCase: true),
            new Address(request.Street, request.City, request.State, request.ZipCode, request.Country),
            request.PhoneNumber,
            request.ImageUrl);

        await _context.SaveChangesAsync(cancellationToken);
    }
}