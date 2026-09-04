using MediatR;
using Picko.Application.Common.Models;
using Picko.Application.Restaurants.DTOs;

namespace Picko.Application.Restaurants.Queries;

public record GetRestaurantsQuery(string? SearchTerm, int Page, int PageSize) : IRequest<PagedResult<RestaurantDto>>
{
    public GetRestaurantsQuery() : this(null, 1, 20)
    {
    }
}