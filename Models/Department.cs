using System.ComponentModel.DataAnnotations;

namespace EmployeeManagement.Models
{
    public class Department
    {
        [Key]
        public int Id { get; set; }
        public string DepartmentName { get; set; } = string.Empty;
        [MinLength(200)]
        public string Description { get; set; } = string.Empty;
    }
}
