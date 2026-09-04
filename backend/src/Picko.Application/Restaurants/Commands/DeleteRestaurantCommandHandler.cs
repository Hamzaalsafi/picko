using MediatR;
using Microsoft.EntityFrameworkCore;
using Picko.Application.Common.Exceptions;
using Picko.Application.Common.Interfaces;
using Picko.Domain.Entities;

namespace Picko.Application.Restaurants.Commands;

public class DeleteRestaurantCommandHandler : IRequestHandler<DeleteRestaurantCommand>
{
    private readonly IApplicationDbContext _context;

    public DeleteRestaurantCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task Handle(DeleteRestaurantCommand request, CancellationToken cancellationToken)
    {
        var entity = await _context.Restaurants
            .SingleOrDefaultAsync(r => r.Id == request.Id, cancellationToken)
            ?? throw new NotFoundException(nameof(Restaurant), request.Id);

        _context.Restaurants.Remove(entity);

        await _context.SaveChangesAsync(cancellationToken);
    }
}