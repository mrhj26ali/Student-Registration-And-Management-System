namespace StudentReg.Domain.Entities;

public enum Grade { A, B, C, D, F }

public class Enrollment
{
    public int Id { get; set; }
    public int StudentId { get; set; }
    public int CourseId { get; set; }

    // Navigation Properties
    public Student Student { get; set; } = null!;
    public Course Course { get; set; } = null!;
    public Grade? Grade { get; set; }
}