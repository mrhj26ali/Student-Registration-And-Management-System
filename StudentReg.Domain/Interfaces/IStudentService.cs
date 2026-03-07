using StudentReg.Domain.Entities;

namespace StudentReg.Domain.Interfaces;

public interface IStudentService
{
    Task<IEnumerable<Student>> GetAllStudentsAsync();
    Task<Student?> GetStudentByIdAsync(int id);
    Task RegisterStudentAsync(Student student);
    Task UpdateStudentAsync(Student student);
    Task DeleteStudentAsync(int id);
}