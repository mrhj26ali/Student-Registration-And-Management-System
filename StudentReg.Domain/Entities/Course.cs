using System.ComponentModel.DataAnnotations;

namespace StudentReg.Domain.Entities;

public class Course
{
    public int Id { get; set; }
    [Required]
    public string Title { get; set; } = string.Empty;
    public int Credits { get; set; }

    // Relationships
    public ICollection<Enrollment> Enrollments { get; set; } = new List<Enrollment>();
}