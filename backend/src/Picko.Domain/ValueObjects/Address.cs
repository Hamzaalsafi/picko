namespace Picko.Domain.ValueObjects;

public sealed record Address(string Street, string City, string State, string ZipCode, string Country);