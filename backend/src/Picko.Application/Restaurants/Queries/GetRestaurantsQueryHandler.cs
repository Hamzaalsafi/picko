using MediatR;
using Microsoft.EntityFrameworkCore;
using Picko.Application.Common.Interfaces;
using Picko.Application.Common.Models;
using Picko.Application.Restaurants.DTOs;

namespace Picko.Application.Restaurants.Queries;

public class GetRestaurantsQueryHandler : IRequestHandler<GetRestaurantsQuery, PagedResult<RestaurantDto>>
{
    private readonly IApplicationDbContext _context;

    public GetRestaurantsQueryHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<PagedResult<RestaurantDto>> Handle(GetRestaurantsQuery request, CancellationToken cancellationToken)
    {
        var query = _context.Restaurants.AsNoTracking();

        if (!string.IsNullOrWhiteSpace(request.SearchTerm))
        {
            var term = request.SearchTerm.Trim();
            query = query.Where(r => r.Name.Contains(term) || r.Description.Contains(term));
        }

        var totalCount = await query.CountAsync(cancellationToken);

        var items = await query
            .OrderBy(r => r.Name)
            .Skip((request.Page - 1) * request.PageSize)
            .Take(request.PageSize)
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
            .ToListAsync(cancellationToken);

        return new PagedResult<RestaurantDto>(items, totalCount, request.Page, request.PageSize);
    }
}