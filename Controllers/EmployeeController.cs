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
            var employees = await _context.Employees.ToListAsync();
            return employees;
        }
        [HttpPost]
        public async Task<Employee> CreateEmployee(Employee employee)
        {
            await _context.Employees.AddAsync(employee);
            await _context.SaveChangesAsync();
            return employee;

        }
        [HttpPut]
        public async Task EditEmployee(Employee employee)
        {
            var person = await _context.Employees.FindAsync(employee.EmployeeId);
            if (person is not null)
            {
            _context.Employees.Update(person);
            }
            _context.SaveChanges();
        }
        [HttpDelete]
        public async Task DeleteEmployee(int id)
        {
            var employee = await _context.Employees.FindAsync(id);
            try
            {
            _context.Remove(employee);
            _context.SaveChanges();

            }
            catch (Exception ex)
            {
                
            }

        } 
    }
}
