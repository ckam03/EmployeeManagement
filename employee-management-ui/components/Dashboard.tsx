import { useEffect, useState } from "react"
import AddDepartment from "./AddDepartment"
import DepartmentTable from "./DepartmentTable"
import EmployeeTable from "./EmployeeTable"
import NewEmployee from "./NewEmployee"

interface Employee {
  employeeId: number
  firstName: string
  lastName: string
  emailAddress: string
  phoneNumber: string
  salary: number
  photo: any
  bio: string
  isActive: boolean
  departmentName: string
  description: string
}
// const getEmployees = async () => {
//   const url = "https://localhost:7029/Employee"
//   const response = await fetch(url, {
//     method: "GET",
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//   const result = await response.json()
//   return result
// }

const Dashboard = () => {
  const [open, setOpen] = useState<boolean>()
  const [open1, setOpen1] = useState<boolean>()
  return (
    <div>
        <div className="flex items-center justify-between pt-10 pb-4">
      <h1 className="text-3xl">Employee Management System</h1>
      <button onClick={() => setOpen(!open)}className="bg-blue-500 p-2 text-blue-50 rounded">
        Create Employee
      </button>
        {open && <NewEmployee />}
        </div>
      <EmployeeTable />
      <div className="flex items-center justify-between pt-56 pb-4">
      <h2 className="text-3xl">Departments</h2>
      <button onClick={() => setOpen1(!open1)} className="bg-blue-500 p-2 text-blue-50 rounded">Add Department</button> 
      </div>
      <DepartmentTable />
      {open1 && <AddDepartment />}
    </div>
  )
}
export default Dashboard
