using Picko.Domain.Entities;
using Picko.Domain.Enums;
using Picko.Domain.Exceptions;
using Picko.Domain.ValueObjects;

namespace Picko.UnitTests;

public class RestaurantTests
{
    private static readonly Address Address = new("1 Main St", "Springfield", "IL", "62701", "USA");

    [Fact]
    public void CreateRestaurant_SetsProperties()
    {
        var restaurant = new Restaurant("Pizza Palace", "Great pizza", CuisineType.Italian, Address, "555-1234", "/img/pizza.png");

        Assert.Equal("Pizza Palace", restaurant.Name);
        Assert.Equal(CuisineType.Italian, restaurant.Cuisine);
        Assert.Equal("Springfield", restaurant.Address.City);
        Assert.True(restaurant.IsOpen);
        Assert.Empty(restaurant.MenuItems);
    }

    [Fact]
    public void CreateRestaurant_EmptyName_ThrowsDomainException()
    {
        Assert.Throws<DomainException>(() =>
            new Restaurant(" ", "Great pizza", CuisineType.Italian, Address, "555-1234", "/img/pizza.png"));
    }

    [Fact]
    public void AddMenuItem_AddsItemToCollection()
    {
        var restaurant = new Restaurant("Pizza Palace", "Great pizza", CuisineType.Italian, Address, "555-1234", "/img/pizza.png");

        restaurant.AddMenuItem(new MenuItem("Margherita", "Classic", new Money(9.99m), "Pizza"));

        var item = Assert.Single(restaurant.MenuItems);
        Assert.Equal("Margherita", item.Name);
        Assert.Equal(9.99m, item.Price.Amount);
        Assert.Equal("USD", item.Price.Currency);
    }

    [Fact]
    public void RemoveMenuItem_RemovesItemFromCollection()
    {
        var restaurant = new Restaurant("Pizza Palace", "Great pizza", CuisineType.Italian, Address, "555-1234", "/img/pizza.png");
        var item = new MenuItem("Margherita", "Classic", new Money(9.99m), "Pizza");
        restaurant.AddMenuItem(item);

        restaurant.RemoveMenuItem(item);

        Assert.Empty(restaurant.MenuItems);
    }

    [Fact]
    public void SetRating_ClampsToValidRange()
    {
        var restaurant = new Restaurant("Pizza Palace", "Great pizza", CuisineType.Italian, Address, "555-1234", "/img/pizza.png");

        restaurant.SetRating(10);

        Assert.Equal(5, restaurant.Rating);
    }

    [Fact]
    public void UpdateRestaurant_UpdatesProperties()
    {
        var restaurant = new Restaurant("Pizza Palace", "Great pizza", CuisineType.Italian, Address, "555-1234", "/img/pizza.png");
        var newAddress = new Address("2 Market St", "Chicago", "IL", "60601", "USA");

        restaurant.Update("Pizza Palace II", "Even better pizza", CuisineType.American, newAddress, "555-9999", "/img/pizza2.png");

        Assert.Equal("Pizza Palace II", restaurant.Name);
        Assert.Equal(CuisineType.American, restaurant.Cuisine);
        Assert.Equal("Chicago", restaurant.Address.City);
    }
}