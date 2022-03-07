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
    <div className="border-2 border-black">
      <ul className="grid grid-cols-8 border-2 rounded border-black mt-6 font-semibold">
        <li>Id</li>
        <li>Name</li>
        <li>Email</li>
        <li>Phone Number</li>
        <li>Salary</li>
        <li>Bio</li>
        <li>Department</li>
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
