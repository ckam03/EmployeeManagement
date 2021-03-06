using System.ComponentModel.DataAnnotations;

namespace EmployeeManagement.Models
{
    public class Employee
    {
        [Key]
        public int EmployeeId { get; set; }
        public string FullName { get; set; } = string.Empty;
        public string EmailAddress { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public int Salary { get; set; }
        public string Bio { get; set; } = string.Empty;
        public string Photo { get; set; } = string.Empty;
        public Department Department { get; set; } = new();


    }
}
