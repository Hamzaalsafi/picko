using FluentValidation;

namespace Picko.Application.Restaurants.Commands;

public class UpdateRestaurantCommandValidator : AbstractValidator<UpdateRestaurantCommand>
{
    public UpdateRestaurantCommandValidator()
    {
        RuleFor(r => r.Id)
            .NotEmpty();

        RuleFor(r => r.Name)
            .NotEmpty()
            .MaximumLength(200);

        RuleFor(r => r.Cuisine)
            .NotEmpty()
            .Must(IsValidCuisine)
            .WithMessage("Cuisine must be a valid cuisine type.");

        RuleFor(r => r.City)
            .NotEmpty()
            .MaximumLength(100);

        RuleFor(r => r.Country)
            .NotEmpty()
            .MaximumLength(100);
    }

    private static bool IsValidCuisine(string? cuisine)
        => Enum.TryParse<Picko.Domain.Enums.CuisineType>(cuisine, ignoreCase: true, out _);
}