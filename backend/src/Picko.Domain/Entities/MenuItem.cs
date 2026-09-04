using Picko.Domain.Common;
using Picko.Domain.Exceptions;
using Picko.Domain.ValueObjects;

namespace Picko.Domain.Entities;

public class MenuItem : BaseEntity
{
    private MenuItem()
    {
    }

    public MenuItem(string name, string description, Money price, string category, bool isAvailable = true)
    {
        Name = Guard(name);
        Description = description;
        Price = price;
        Category = category;
        IsAvailable = isAvailable;
    }

    public string Name { get; private set; } = null!;

    public string Description { get; private set; } = null!;

    public Money Price { get; private set; } = null!;

    public string Category { get; private set; } = null!;

    public bool IsAvailable { get; private set; }

    public Guid RestaurantId { get; private set; }

    public Restaurant? Restaurant { get; private set; }

    public void Update(string name, string description, Money price, string category)
    {
        Name = Guard(name);
        Description = description;
        Price = price;
        Category = category;
    }

    public void UpdateAvailability(bool isAvailable)
    {
        IsAvailable = isAvailable;
    }

    private static string Guard(string value)
    {
        if (string.IsNullOrWhiteSpace(value))
        {
            throw new DomainException("Menu item name is required.");
        }

        return value;
    }
}