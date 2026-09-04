namespace Picko.Application.Restaurants.DTOs;

public class MenuItemDto
{
    public Guid Id { get; set; }

    public Guid RestaurantId { get; set; }

    public string Name { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;

    public decimal Price { get; set; }

    public string Currency { get; set; } = "USD";

    public string Category { get; set; } = string.Empty;

    public bool IsAvailable { get; set; }
}