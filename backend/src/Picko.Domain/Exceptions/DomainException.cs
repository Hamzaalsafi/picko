namespace Picko.Domain.Exceptions;

public enum ExceptionType
{
    Invalid,
    Conflict,
    NotFound
}

public class DomainException : Exception
{
    public ExceptionType Type { get; }

    public DomainException(ExceptionType type, string message)
        : base(message)
    {
        Type = type;
    }
}