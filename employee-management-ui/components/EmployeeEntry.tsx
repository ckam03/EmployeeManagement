import { useEffect, useState } from "react"
import Description from "./Description"
import EditEmployee from "./EditEmployee"

interface Employee {
  employeeId: any
  firstName: string
  lastName: string
  emailAddress: string
  phoneNumber: string
  salary: number
  photo: any
  bio: any
  department: {
    departmentName: any,
    description: string
}
}

const deleteEmployee = async (data: Employee) => {
    console.log(data);  
    const url = `https://localhost:7029/Employee/${data.employeeId}`
    const response = await fetch(url, {
        method: "DELETE",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data.employeeId,
      })
      console.log(response)
      const result = await response.text()
      console.log(result)
      return result
}
const EmployeeEntry: React.FC<Employee> = (props) => { 
  const [isOpen, setIsOpen] = useState<boolean>()
  const [open, setOpen] = useState<boolean>()
  const [employee, setEmployee] = useState<Employee>({
    employeeId: 0,
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    salary: 0,
    photo: "",
    bio: "",
    department: {
      departmentName: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis, enim nec dignissim elementum, diam neque viverra leo, a tincidunt urna lorem sit amet augue. Quisque aliquet eros eget commodo pellentesque. Duis iaculis porttitor hendrerit. Suspendisse euismod semper nulla id suscipit. Vestibulum mollis hendrerit sem sit amet eleifend. Mauris tempor sem a dignissim viverra. Phasellus ultricies pulvinar rutrum.Curabitur a nisi dui. Integer commodo porta aliquam. Vestibulum a lorem a lectus tincidunt ullamcorper. Quisque interdum congue mi, ut finibus lectus malesuada ut. Phasellus sollicitudin ligula sed diam lacinia pulvinar. Praesent eleifend ullamcorper accumsan. Proin aliquam nibh nulla, vitae fermentum metus lacinia eu. Ut rutrum eleifend magna, eget mattis enim rutrum et. Curabitur accumsan mauris nec volutpat sodales. Nam placerat fringilla justo. Aliquam tincidunt malesuada nibh a tempus. Donec in nisl in quam condimentum porta ut vitae est. Donec scelerisque id sapien nec ultricies.Ut congue elit nunc, sed tempor nisi vestibulum quis. Sed dapibus bibendum erat, vel dapibus dolor. Sed mollis est id ante tempor euismod. Aenean nec cursus turpis. Integer urna nisl, malesuada eget suscipit in, vestibulum et nulla. Donec auctor tortor vel placerat tempor. Quisque augue augue, sodales vitae lacus non, luctus tempus diam. Phasellus non elit ac.",
    },
  })
  useEffect(() => {
    setEmployee({
      employeeId: props.employeeId,
      firstName: props.firstName,
      lastName: props.lastName,
      emailAddress: props.emailAddress,
      phoneNumber: props.phoneNumber,
      salary: props.salary,
      bio: props.bio,
      photo: props.photo,
      department: {
        departmentName: props.department.departmentName,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis, enim nec dignissim elementum, diam neque viverra leo, a tincidunt urna lorem sit amet augue. Quisque aliquet eros eget commodo pellentesque. Duis iaculis porttitor hendrerit. Suspendisse euismod semper nulla id suscipit. Vestibulum mollis hendrerit sem sit amet eleifend. Mauris tempor sem a dignissim viverra. Phasellus ultricies pulvinar rutrum.Curabitur a nisi dui. Integer commodo porta aliquam. Vestibulum a lorem a lectus tincidunt ullamcorper. Quisque interdum congue mi, ut finibus lectus malesuada ut. Phasellus sollicitudin ligula sed diam lacinia pulvinar. Praesent eleifend ullamcorper accumsan. Proin aliquam nibh nulla, vitae fermentum metus lacinia eu. Ut rutrum eleifend magna, eget mattis enim rutrum et. Curabitur accumsan mauris nec volutpat sodales. Nam placerat fringilla justo. Aliquam tincidunt malesuada nibh a tempus. Donec in nisl in quam condimentum porta ut vitae est. Donec scelerisque id sapien nec ultricies.Ut congue elit nunc, sed tempor nisi vestibulum quis. Sed dapibus bibendum erat, vel dapibus dolor. Sed mollis est id ante tempor euismod. Aenean nec cursus turpis. Integer urna nisl, malesuada eget suscipit in, vestibulum et nulla. Donec auctor tortor vel placerat tempor. Quisque augue augue, sodales vitae lacus non, luctus tempus diam. Phasellus non elit ac.",
      },
    })
    return () => {}
  }, [props.bio, props.employeeId, props.firstName, props.lastName, props.emailAddress, props.phoneNumber, props.salary, props.photo, props.department.departmentName, props.department.description])
  const handleDelete = (data: Employee) => {
    alert("Employee Deleted")
    deleteEmployee(data)
  }
  const handleEdit = () => {

  }
  return (
    <div className="border-b border-b-gray-300">
      <ul className={`grid grid-cols-8 `}>
        <li className="flex items-center">
          {props.photo}
          <span className="pl-4">{props.employeeId}</span>
        </li>
        <li>
          {props.firstName}
          {props.lastName}
        </li>
        <li>{props.emailAddress}</li>
        <li>{props.phoneNumber}</li>
        <li>{props.salary}</li>
        <li>{props.bio}</li>
        <li
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {props.department.departmentName}
        {isOpen && <li className="z-50 absolute right-10 duration-300 ease-in-out"><Description description={props.department.description}/></li>}
        </li>
        <li className="space-x-6">
        <button onClick={() => setOpen(!open)}>Edit</button>
        <button onClick={() => handleDelete(employee)} className={` text-red-500`}>Delete</button>
        </li>
        {open && <EditEmployee employeeId={props.employeeId} firstName={props.firstName} lastName={props.lastName} emailAddress={props.emailAddress} phoneNumber={props.phoneNumber} salary={props.salary} photo={props.photo} bio={props.bio} department={{
                  departmentName: props.department.departmentName,
                  description: ""
              }} />}
      </ul>
    </div>
  )
}
export default EmployeeEntry
