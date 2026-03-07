using System.ComponentModel.DataAnnotations;

namespace StudentReg.Domain.Entities;

public class Student
{
    public int Id { get; set; }
    [Required]
    public string FirstName { get; set; } = string.Empty;
    public string? MiddleName { get; set; }
    [Required]
    public string LastName { get; set; } = string.Empty;
    [Required, EmailAddress]
    public string Email { get; set; } = string.Empty;
    [Required]
    public DateTime DateOfBirth { get; set; }

    // Relationships
    public ICollection<Enrollment> Enrollments { get; set; } = new List<Enrollment>();
}