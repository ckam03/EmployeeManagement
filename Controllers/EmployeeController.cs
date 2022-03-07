using EmployeeManagement.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System.Linq;

namespace EmployeeManagement.Controllers
{
    [Route("/Employee")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public EmployeeController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<List<Employee>> GetEmployees()
        {
            var employees = await _context.Employees
                .Include(e => e.Department)
                .ToListAsync();
            return employees;
        }
        [Route("CreateEmployee")]
        [HttpPost]
        public async Task<Employee> CreateEmployee(Employee employee)
        {
            await _context.Employees.AddAsync(employee);
            await _context.SaveChangesAsync();
            return employee;

        }
        [Route("EditEmployee")]
        [HttpPut]
        public async Task EditEmployee(Employee employee)
        {
                _context.Employees.Update(employee);
                await _context.SaveChangesAsync();
        }
        [Route("{id}")]
        [HttpDelete]
        public async Task<ActionResult> DeleteEmployee(int id)
        {
            //var employeeId = Int32.Parse(id);
            //find employee by id
            var employee = await _context.Employees.FindAsync(id);
            if (employee is null)
            {
                return NotFound();
            }
            //disable employee
            //employee.IsActive = false;
            //update db
            _context.Remove(employee);

            await _context.SaveChangesAsync();
            return NoContent();

        }
    }
}
