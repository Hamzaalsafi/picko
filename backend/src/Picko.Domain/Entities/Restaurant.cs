using Picko.Domain.Common;
using Picko.Domain.Enums;
using Picko.Domain.ValueObjects;

namespace Picko.Domain.Entities;

public class Restaurant : BaseEntity
{
    private readonly List<MenuItem> _menuItems = [];

    private Restaurant()
    {
    }

    public Restaurant(string name, string description, CuisineType cuisine, Address address, string phoneNumber, string imageUrl)
    {
        Name = Guard(name);
        Description = description;
        Cuisine = cuisine;
        Address = address;
        PhoneNumber = phoneNumber;
        ImageUrl = imageUrl;
    }

    public string Name { get; private set; } = null!;

    public string Description { get; private set; } = null!;

    public CuisineType Cuisine { get; private set; }

    public Address Address { get; private set; } = null!;

    public string PhoneNumber { get; private set; } = null!;

    public string ImageUrl { get; private set; } = null!;

    public double? Rating { get; private set; }

    public bool IsOpen { get; private set; } = true;

    public IReadOnlyCollection<MenuItem> MenuItems => _menuItems.AsReadOnly();

    public void Update(string name, string description, CuisineType cuisine, Address address, string phoneNumber, string imageUrl)
    {
        Name = Guard(name);
        Description = description;
        Cuisine = cuisine;
        Address = address;
        PhoneNumber = phoneNumber;
        ImageUrl = imageUrl;
    }

    public void SetRating(double rating)
    {
        Rating = Math.Clamp(rating, 0, 5);
    }

    public void SetOpen(bool isOpen)
    {
        IsOpen = isOpen;
    }

    public void AddMenuItem(MenuItem item)
    {
        _menuItems.Add(item);
    }

    public void RemoveMenuItem(MenuItem item)
    {
        _menuItems.Remove(item);
    }

    private static string Guard(string value)
    {
        if (string.IsNullOrWhiteSpace(value))
        {
            throw new Exceptions.DomainException("Restaurant name is required.");
        }

        return value;
    }
}