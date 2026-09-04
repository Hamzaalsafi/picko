using MediatR;
using Microsoft.AspNetCore.Mvc;
using Picko.Application.Common.Models;
using Picko.Application.Restaurants.Commands;
using Picko.Application.Restaurants.DTOs;
using Picko.Application.Restaurants.Queries;

namespace Picko.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RestaurantsController : ControllerBase
{
    private readonly IMediator _mediator;

    public RestaurantsController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpGet]
    [ProducesResponseType(typeof(PagedResult<RestaurantDto>), StatusCodes.Status200OK)]
    public async Task<ActionResult<PagedResult<RestaurantDto>>> GetRestaurants(
        [FromQuery] string? searchTerm,
        [FromQuery] int page = 1,
        [FromQuery] int pageSize = 20,
        CancellationToken cancellationToken = default)
    {
        var result = await _mediator.Send(new GetRestaurantsQuery(searchTerm, page, pageSize), cancellationToken);
        return Ok(result);
    }

    [HttpGet("{id:guid}")]
    [ProducesResponseType(typeof(RestaurantDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<RestaurantDto>> GetRestaurant(Guid id, CancellationToken cancellationToken)
    {
        var restaurant = await _mediator.Send(new GetRestaurantByIdQuery(id), cancellationToken);
        return Ok(restaurant);
    }

    [HttpGet("{id:guid}/menu")]
    [ProducesResponseType(typeof(IReadOnlyList<MenuItemDto>), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<IReadOnlyList<MenuItemDto>>> GetMenu(Guid id, CancellationToken cancellationToken)
    {
        var items = await _mediator.Send(new GetRestaurantMenuQuery(id), cancellationToken);
        return Ok(items);
    }

    [HttpPost]
    [ProducesResponseType(typeof(Guid), StatusCodes.Status201Created)]
    public async Task<ActionResult<Guid>> CreateRestaurant(
        [FromBody] CreateRestaurantCommand command,
        CancellationToken cancellationToken)
    {
        var id = await _mediator.Send(command, cancellationToken);
        return CreatedAtAction(nameof(GetRestaurant), new { id }, id);
    }

    [HttpPut("{id:guid}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> UpdateRestaurant(
        Guid id,
        [FromBody] UpdateRestaurantCommand command,
        CancellationToken cancellationToken)
    {
        if (id != command.Id)
        {
            return BadRequest("The route id does not match the body id.");
        }

        await _mediator.Send(command, cancellationToken);
        return NoContent();
    }

    [HttpDelete("{id:guid}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> DeleteRestaurant(Guid id, CancellationToken cancellationToken)
    {
        await _mediator.Send(new DeleteRestaurantCommand(id), cancellationToken);
        return NoContent();
    }

    [HttpPost("{id:guid}/menu")]
    [ProducesResponseType(typeof(Guid), StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<Guid>> AddMenuItem(
        Guid id,
        [FromBody] AddMenuItemCommand command,
        CancellationToken cancellationToken)
    {
        var menuItemId = await _mediator.Send(command.WithRestaurantId(id), cancellationToken);
        return CreatedAtAction(nameof(GetRestaurant), new { id }, menuItemId);
    }
}