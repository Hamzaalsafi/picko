using MediatR;
using Picko.Application.Restaurants.DTOs;

namespace Picko.Application.Restaurants.Queries;

public record GetRestaurantMenuQuery(Guid Id) : IRequest<IReadOnlyList<MenuItemDto>>;