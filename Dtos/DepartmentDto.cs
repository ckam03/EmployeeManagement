using System.ComponentModel.DataAnnotations;

namespace EmployeeManagement.Dtos
{
    public class DepartmentDto
    {
        [Key]
        public int Id { get; set; }
        public string DepartmentName { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
    }
}
