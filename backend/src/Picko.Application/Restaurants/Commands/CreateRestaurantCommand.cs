using MediatR;

namespace Picko.Application.Restaurants.Commands;

public record CreateRestaurantCommand(
    string Name,
    string Description,
    string Cuisine,
    string Street,
    string City,
    string State,
    string ZipCode,
    string Country,
    string PhoneNumber,
    string ImageUrl) : IRequest<Guid>;