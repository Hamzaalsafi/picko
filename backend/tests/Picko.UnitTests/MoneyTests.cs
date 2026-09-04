using Picko.Domain.Exceptions;
using Picko.Domain.ValueObjects;

namespace Picko.UnitTests;

public class MoneyTests
{
    [Fact]
    public void CreateMoney_SetsAmountAndCurrency()
    {
        var money = new Money(12.50m, "EUR");

        Assert.Equal(12.50m, money.Amount);
        Assert.Equal("EUR", money.Currency);
    }

    [Fact]
    public void CreateMoney_NegativeAmount_ThrowsDomainException()
    {
        Assert.Throws<DomainException>(() => new Money(-1m));
    }

    [Fact]
    public void CreateMoney_EmptyCurrency_ThrowsDomainException()
    {
        Assert.Throws<DomainException>(() => new Money(5m, " "));
    }

    [Fact]
    public void Zero_ReturnsZeroAmount()
    {
        var money = Money.Zero("USD");

        Assert.Equal(0m, money.Amount);
        Assert.Equal("USD", money.Currency);
    }

    [Fact]
    public void EqualValues_AreEqual()
    {
        var money1 = new Money(10m);
        var money2 = new Money(10m);

        Assert.Equal(money1, money2);
    }
}