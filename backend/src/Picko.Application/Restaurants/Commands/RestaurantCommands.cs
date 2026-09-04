using MediatR;

namespace Picko.Application.Restaurants.Commands;

public record UpdateRestaurantCommand(
    Guid Id,
    string Name,
    string Description,
    string Cuisine,
    string Street,
    string City,
    string State,
    string ZipCode,
    string Country,
    string PhoneNumber,
    string ImageUrl) : IRequest;

public record DeleteRestaurantCommand(Guid Id) : IRequest;

public record AddMenuItemCommand(
    Guid RestaurantId,
    string Name,
    string Description,
    decimal Price,
    string Currency,
    string Category,
    bool IsAvailable) : IRequest<Guid>
{
    public AddMenuItemCommand WithRestaurantId(Guid restaurantId) => this with { RestaurantId = restaurantId };
}