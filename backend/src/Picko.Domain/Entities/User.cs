using System.Net.Mail;
using Picko.Domain.Common;
using Picko.Domain.Exceptions;

namespace Picko.Domain.Entities;

public class User : BaseEntity
{
    private const int NameMinLength = 2;
    private const int NameMaxLength = 100;

    public string Name { get; private set; } = null!;
    public string Email { get; private set; } = null!;
    public string PasswordHash { get; private set; } = null!;

    private User()
    {
    }

    public User(string name, string email, string passwordHash)
    {
        SetName(name);
        SetEmail(email);
        SetPasswordHash(passwordHash);
    }

    public void Update(string name, string email)
    {
        SetName(name);
        SetEmail(email);
    }

    public void ChangePasswordHash(string newPasswordHash)
    {
        SetPasswordHash(newPasswordHash);
    }

    private void SetName(string name)
    {
        if (string.IsNullOrWhiteSpace(name))
        {
            throw new DomainException(
                ExceptionType.Invalid,
                "Name is required."
            );
        }

        name = name.Trim();

        if (name.Length < NameMinLength || name.Length > NameMaxLength)
        {
            throw new DomainException(
                ExceptionType.Invalid,
                $"Name must be between {NameMinLength} and {NameMaxLength} characters."
            );
        }

        Name = name;
    }

    private void SetEmail(string email)
    {
        if (string.IsNullOrWhiteSpace(email))
        {
            throw new DomainException(
                ExceptionType.Invalid,
                "Email is required."
            );
        }

        email = email.Trim().ToLowerInvariant();

        try
        {
            var mailAddress = new MailAddress(email);

            if (mailAddress.Address != email)
            {
                throw new DomainException(
                    ExceptionType.Invalid,
                    "Invalid email format."
                );
            }
        }
        catch (FormatException)
        {
            throw new DomainException(
                ExceptionType.Invalid,
                "Invalid email format."
            );
        }

        Email = email;
    }

    private void SetPasswordHash(string passwordHash)
    {
        if (string.IsNullOrWhiteSpace(passwordHash))
        {
            throw new DomainException(
                ExceptionType.Invalid,
                "Password hash is required."
            );
        }

        PasswordHash = passwordHash;
    }
}