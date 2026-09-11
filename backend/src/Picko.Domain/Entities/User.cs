using Picko.Domain.Common;

namespace Picko.Domain.Entities;

public class User : BaseEntity
{
    private User()
    {
    }

    public User(string name, string email, string passwordHash)
    {
        Name = name;
        Email = email;
        PasswordHash = passwordHash;
    }

    public string Name { get; private set; } = null!;
    public string Email { get; private set; } = null!;
    public string PasswordHash { get; private set; } = null!;
}