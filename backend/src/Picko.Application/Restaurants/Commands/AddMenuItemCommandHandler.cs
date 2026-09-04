using MediatR;
using Microsoft.EntityFrameworkCore;
using Picko.Application.Common.Exceptions;
using Picko.Application.Common.Interfaces;
using Picko.Domain.Entities;
using Picko.Domain.ValueObjects;

namespace Picko.Application.Restaurants.Commands;

public class AddMenuItemCommandHandler : IRequestHandler<AddMenuItemCommand, Guid>
{
    private readonly IApplicationDbContext _context;

    public AddMenuItemCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<Guid> Handle(AddMenuItemCommand request, CancellationToken cancellationToken)
    {
        var restaurant = await _context.Restaurants
            .Include(r => r.MenuItems)
            .SingleOrDefaultAsync(r => r.Id == request.RestaurantId, cancellationToken)
            ?? throw new NotFoundException(nameof(Restaurant), request.RestaurantId);

        var item = new MenuItem(
            request.Name,
            request.Description,
            new Money(request.Price, request.Currency),
            request.Category,
            request.IsAvailable);

        restaurant.AddMenuItem(item);

        await _context.SaveChangesAsync(cancellationToken);

        return item.Id;
    }
}