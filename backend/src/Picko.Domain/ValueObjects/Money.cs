using Picko.Domain.Exceptions;

namespace Picko.Domain.ValueObjects;

public sealed record Money
{
    public decimal Amount { get; }

    public string Currency { get; }

    public Money(decimal amount, string currency = "USD")
    {
        if (amount < 0)
        {
            throw new DomainException("Money amount must be non-negative.");
        }

        if (string.IsNullOrWhiteSpace(currency))
        {
            throw new DomainException("Money currency is required.");
        }

        Amount = amount;
        Currency = currency;
    }

    public static Money Zero(string currency = "USD") => new(0m, currency);
}