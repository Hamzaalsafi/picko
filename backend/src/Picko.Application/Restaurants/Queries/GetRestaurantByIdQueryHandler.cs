using MediatR;
using Microsoft.EntityFrameworkCore;
using Picko.Application.Common.Exceptions;
using Picko.Application.Common.Interfaces;
using Picko.Application.Restaurants.DTOs;

namespace Picko.Application.Restaurants.Queries;

public class GetRestaurantByIdQueryHandler : IRequestHandler<GetRestaurantByIdQuery, RestaurantDto>
{
    private readonly IApplicationDbContext _context;

    public GetRestaurantByIdQueryHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<RestaurantDto> Handle(GetRestaurantByIdQuery request, CancellationToken cancellationToken)
    {
        var restaurant = await _context.Restaurants
            .AsNoTracking()
            .Where(r => r.Id == request.Id)
            .Select(r => new RestaurantDto
            {
                Id = r.Id,
                Name = r.Name,
                Description = r.Description,
                Cuisine = r.Cuisine.ToString(),
                Street = r.Address.Street,
                City = r.Address.City,
                State = r.Address.State,
                ZipCode = r.Address.ZipCode,
                Country = r.Address.Country,
                PhoneNumber = r.PhoneNumber,
                ImageUrl = r.ImageUrl,
                Rating = r.Rating,
                IsOpen = r.IsOpen
            })
            .SingleOrDefaultAsync(cancellationToken)
            ?? throw new NotFoundException(nameof(Picko.Domain.Entities.Restaurant), request.Id);

        return restaurant;
    }
}