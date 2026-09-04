using FluentValidation;

namespace Picko.Application.Restaurants.Commands;

public class AddMenuItemCommandValidator : AbstractValidator<AddMenuItemCommand>
{
    public AddMenuItemCommandValidator()
    {
        RuleFor(m => m.RestaurantId)
            .NotEmpty();

        RuleFor(m => m.Name)
            .NotEmpty()
            .MaximumLength(200);

        RuleFor(m => m.Price)
            .GreaterThanOrEqualTo(0);

        RuleFor(m => m.Currency)
            .NotEmpty()
            .MaximumLength(3);

        RuleFor(m => m.Category)
            .NotEmpty()
            .MaximumLength(100);
    }
}