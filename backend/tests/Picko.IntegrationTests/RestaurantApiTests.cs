using System.Net;
using System.Net.Http.Json;

namespace Picko.IntegrationTests;

public class RestaurantApiTests : IClassFixture<PostgreSqlFixture>
{
    private readonly HttpClient _client;

    public RestaurantApiTests(PostgreSqlFixture fixture)
    {
        _client = fixture.CreateClient();
    }

    [Fact]
    public async Task Create_Get_And_Delete_Restaurant_Flow()
    {
        var createResponse = await _client.PostAsJsonAsync("/api/restaurants", new
        {
            name = "Pizza Palace",
            description = "Authentic Neapolitan pizza",
            cuisine = "Italian",
            street = "1 Main Street",
            city = "Springfield",
            state = "IL",
            zipCode = "62701",
            country = "USA",
            phoneNumber = "555-1234",
            imageUrl = "/images/pizza-palace.png"
        });

        Assert.Equal(HttpStatusCode.Created, createResponse.StatusCode);

        var id = await createResponse.Content.ReadFromJsonAsync<Guid>();
        Assert.NotEqual(Guid.Empty, id);

        var getResponse = await _client.GetAsync($"/api/restaurants/{id}");
        Assert.Equal(HttpStatusCode.OK, getResponse.StatusCode);

        var restaurant = await getResponse.Content.ReadFromJsonAsync<RestaurantResponse>();
        Assert.NotNull(restaurant);
        Assert.Equal("Pizza Palace", restaurant!.Name);
        Assert.Equal("Italian", restaurant.Cuisine);
        Assert.Equal("Springfield", restaurant.City);

        var listResponse = await _client.GetAsync($"/api/restaurants?searchTerm=Pizza");
        Assert.Equal(HttpStatusCode.OK, listResponse.StatusCode);

        var deleteResponse = await _client.DeleteAsync($"/api/restaurants/{id}");
        Assert.Equal(HttpStatusCode.NoContent, deleteResponse.StatusCode);
    }

    [Fact]
    public async Task Create_And_List_MenuItems()
    {
        var createResponse = await _client.PostAsJsonAsync("/api/restaurants", new
        {
            name = "Sushi House",
            description = "Fresh sushi",
            cuisine = "Japanese",
            street = "2 Market St",
            city = "Chicago",
            state = "IL",
            zipCode = "60601",
            country = "USA",
            phoneNumber = "555-9999",
            imageUrl = "/images/sushi-house.png"
        });

        var restaurantId = await createResponse.Content.ReadFromJsonAsync<Guid>();

        var itemResponse = await _client.PostAsJsonAsync($"/api/restaurants/{restaurantId}/menu", new
        {
            name = "California Roll",
            description = "Crab, avocado, cucumber",
            price = 8.99m,
            currency = "USD",
            category = "Rolls",
            isAvailable = true
        });

        Assert.Equal(HttpStatusCode.Created, itemResponse.StatusCode);
        var menuItemId = await itemResponse.Content.ReadFromJsonAsync<Guid>();
        Assert.NotEqual(Guid.Empty, menuItemId);

        var menuResponse = await _client.GetAsync($"/api/restaurants/{restaurantId}/menu");
        Assert.Equal(HttpStatusCode.OK, menuResponse.StatusCode);

        var menu = await menuResponse.Content.ReadFromJsonAsync<List<MenuItemResponse>>();
        Assert.NotNull(menu);
        var item = Assert.Single(menu!);
        Assert.Equal("California Roll", item.Name);
        Assert.Equal(8.99m, item.Price);
    }

    [Fact]
    public async Task Get_NonExistent_Restaurant_ReturnsNotFound()
    {
        var response = await _client.GetAsync($"/api/restaurants/{Guid.NewGuid()}");

        Assert.Equal(HttpStatusCode.NotFound, response.StatusCode);
    }

    private sealed record RestaurantResponse(
        Guid Id,
        string Name,
        string Cuisine,
        string City,
        string PhoneNumber,
        bool IsOpen);

    private sealed record MenuItemResponse(
        Guid Id,
        Guid RestaurantId,
        string Name,
        decimal Price,
        string Category,
        bool IsAvailable);
}