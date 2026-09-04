namespace Picko.Application.Restaurants.DTOs;

public class RestaurantDto
{
    public Guid Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;

    public string Cuisine { get; set; } = string.Empty;

    public string Street { get; set; } = string.Empty;

    public string City { get; set; } = string.Empty;

    public string State { get; set; } = string.Empty;

    public string ZipCode { get; set; } = string.Empty;

    public string Country { get; set; } = string.Empty;

    public string PhoneNumber { get; set; } = string.Empty;

    public string ImageUrl { get; set; } = string.Empty;

    public double? Rating { get; set; }

    public bool IsOpen { get; set; }
}