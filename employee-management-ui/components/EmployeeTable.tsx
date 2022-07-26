import { useEffect, useState } from "react"
import Image from 'next/image'
import man from "../images/man.jpg"
import EmployeeEntry from "./EmployeeEntry"

interface Employee {
    employeeId: any
    firstName: string
    lastName: string
    emailAddress: string
    phoneNumber: string
    salary: number
    photo: any
    bio: string
    department: {
        departmentName: string,
        description: string
    }
  }

interface IEmployeeData {
  employeeId: number
  firstName: string
  lastName: string
  emailAddress: string
  phoneNumber: string
  salary: number
  photo: any
  bio: string
  department: {
    departmentName: string,
    description: string
}
}

const getEmployees = async () => {
  const url = "https://localhost:7029/Employee"
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
  const result = await response.json()
  return result
}
const EmployeeTable = () => {
  const [employees, setEmployees] = useState<Employee[]>([])
  useEffect(() => {
    getEmployees().then((data) => {
      setEmployees(data)
      console.log(data)
    }) 
    return () => {}
  }, [])
  return (
    <div className="">
      <ul className="grid grid-cols-8 items-center justify-items-center font-semibold border-b-2 border-gray-300 mt-2 text-gray-500">
        <li></li>
        <li>ID</li>
        <li>Full Name</li>
        <li>Phone Number</li>
        <li>Department</li>
        <li>Salary</li>
        <li>Email</li>
        <li>Actions</li>
      </ul>
      {employees.map((employee: Employee) => {
          return (
            <div key={employee.employeeId.toString()}>
              <EmployeeEntry
                key={employee.employeeId.toString()}
                employeeId={employee.employeeId}
                firstName={employee.firstName}
                lastName={employee.lastName}
                emailAddress={employee.emailAddress}
                phoneNumber={employee.phoneNumber}
                salary={employee.salary}
                photo={
                  <Image src={man} height={50} width={50} alt="employee" />
                }
                bio={employee.bio}
                department={employee.department}                
              />
            </div>
          )
        })}
        
    </div>
  )
}
export default EmployeeTable
