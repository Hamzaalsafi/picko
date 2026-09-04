using MediatR;
using Microsoft.EntityFrameworkCore;
using Picko.Application.Common.Exceptions;
using Picko.Application.Common.Interfaces;
using Picko.Application.Restaurants.DTOs;

namespace Picko.Application.Restaurants.Queries;

public class GetRestaurantMenuQueryHandler : IRequestHandler<GetRestaurantMenuQuery, IReadOnlyList<MenuItemDto>>
{
    private readonly IApplicationDbContext _context;

    public GetRestaurantMenuQueryHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IReadOnlyList<MenuItemDto>> Handle(GetRestaurantMenuQuery request, CancellationToken cancellationToken)
    {
        var restaurantExists = await _context.Restaurants
            .AsNoTracking()
            .AnyAsync(r => r.Id == request.Id, cancellationToken);

        if (!restaurantExists)
        {
            throw new NotFoundException(nameof(Picko.Domain.Entities.Restaurant), request.Id);
        }

        var items = await _context.MenuItems
            .AsNoTracking()
            .Where(m => m.RestaurantId == request.Id)
            .OrderBy(m => m.Name)
            .Select(m => new MenuItemDto
            {
                Id = m.Id,
                RestaurantId = m.RestaurantId,
                Name = m.Name,
                Description = m.Description,
                Price = m.Price.Amount,
                Currency = m.Price.Currency,
                Category = m.Category,
                IsAvailable = m.IsAvailable
            })
            .ToListAsync(cancellationToken);

        return items;
    }
}