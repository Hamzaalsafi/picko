using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Picko.Domain.Entities;

namespace Picko.Infrastructure.Persistence.Configurations;

public class MenuItemConfiguration : IEntityTypeConfiguration<MenuItem>
{
    public void Configure(EntityTypeBuilder<MenuItem> builder)
    {
        builder.HasKey(m => m.Id);

        builder.Property(m => m.Name)
            .HasMaxLength(200)
            .IsRequired();

        builder.Property(m => m.Description)
            .HasMaxLength(1000);

        builder.Property(m => m.Category)
            .HasMaxLength(100);

        builder.ComplexProperty(m => m.Price, price =>
        {
            price.Property(p => p.Amount).HasColumnName("Price").HasPrecision(18, 2).IsRequired();
            price.Property(p => p.Currency).HasColumnName("Currency").HasMaxLength(3).IsRequired();
        });

        builder.HasIndex(m => m.RestaurantId);
    }
}