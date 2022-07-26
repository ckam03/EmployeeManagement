using EmployeeManagement.Dtos;
using EmployeeManagement.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EmployeeManagement.Controllers
{
    [Route("/Department")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public DepartmentController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<List<Department>> GetDepartments()
        {
            var departments = await _context.Departments
                .Include(d => d.Employees)
                .ToListAsync();
            return departments;
        }


        // POST api/<DepartmentController>
        [HttpPost]
        public async Task CreateDepartment(DepartmentDto departmentDto)
        {
            Department department = new()
            {
                Id = departmentDto.Id,
                DepartmentName = departmentDto.DepartmentName,
                Description = departmentDto.Description,
            };
            await _context.Departments.AddAsync(department);
            await _context.SaveChangesAsync();
        }
    }
}
