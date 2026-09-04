using MediatR;
using Picko.Application.Restaurants.DTOs;

namespace Picko.Application.Restaurants.Queries;

public record GetRestaurantByIdQuery(Guid Id) : IRequest<RestaurantDto>;