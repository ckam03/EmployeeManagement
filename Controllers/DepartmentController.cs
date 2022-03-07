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
                .ToListAsync();
            return departments;
        }


        // POST api/<DepartmentController>
        [HttpPost]
        public async Task CreateDepartment(Department department)
        {
            await _context.Departments.AddAsync(department);
            await _context.SaveChangesAsync();
        }

        // DELETE api/<DepartmentController>/5
        [Route("DeleteDepartment")]
        [HttpDelete]
        public async Task <List<Employee>> DeleteDepartment(string name)
        {
            //var department = await _context.Departments.FindAsync(id);
            var employees = await _context.Employees
                .Where(x => x.Department.DepartmentName
                .Equals(name))
                .Include(x => x.Department).ToListAsync();
            _context.RemoveRange(employees);
            var department = await _context.Departments.Where(x => x.DepartmentName.Equals(name)).ToListAsync();
            _context.RemoveRange(department);
            
            await _context.SaveChangesAsync();
            return employees;
            //var employees = _context.Employees.Select(x => x.Department.DepartmentName.Equals(department.DepartmentName)).ToListAsync();

            //var employees = await _context.Employees.Where(x => x.Department.DepartmentName == department.DepartmentName).ToListAsync();
            //_context.RemoveRange(employees);
            //_context.Remove(department);
            
            //return NoContent();
        }
    }
}
