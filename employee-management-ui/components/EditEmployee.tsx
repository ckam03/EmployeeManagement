import { useState, useEffect } from "react"

interface Employee {
  employeeId: number
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

const edit = async (data: Employee) => {
  const url = "https://localhost:7029/Employee/EditEmployee"
  const response = await fetch(url, {
    method: "PUT",
    mode: "cors",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
  const result = await response.json()
  return result
}

const EditEmployee: React.FC<Employee> = (props) => {
  const handleSubmit = () => {
    alert("data sent")
    edit(employee)
    console.log(employee)
  }
  const [employeeId, setEmployeeId] = useState<any>(props.employeeId)
  const [firstName, setFirstName] = useState<any>()
  const [lastName, setLastName] = useState<any>()
  const [email, setEmail] = useState<any>()
  const [phoneNumber, setPhoneNumber] = useState<any>()
  const [salary, setSalary] = useState<any>()
  const [bio, setBio] = useState<any>()
  const [photo, setPhoto] = useState<any>()
  const [departmentName, setDepartmentName] = useState<any>()
  const [departmentDescription, setDepartmentDescription] = useState<any>()
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
        description: ""
    }
  })
  useEffect(() => {
    setEmployee({
      employeeId: employeeId,
      firstName: firstName,
      lastName: lastName,
      emailAddress: email,
      phoneNumber: phoneNumber,
      salary: salary,
      bio: bio,
      photo: photo,
      department: {
        departmentName: departmentName,
        description: departmentDescription
    }
    })
    return () => {}
  }, [bio, departmentName, email, firstName, lastName, phoneNumber, photo, salary, employeeId, departmentDescription])

  return (
    <div className="w-[30rem] h-[40rem] absolute border-2 rounded-lg bg-white shadow-lg left-[50rem] top-[20rem]">
      <form
        onSubmit={handleSubmit}
        className="flex-col flex space-y-2 items-center"
      >
        <input
          type="text"
          defaultValue={employeeId}
          placeholder="First Name"
          className="p-2 border-2 border-gray-400 w-80 "
        />
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          className="p-2 border-2 border-gray-400 w-80 "
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          className="p-2 border-2 border-gray-400 w-80 "
        />
        <input
          type="email"
          value={email}
          //defaultValue={props.emailAddress}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="p-2 border-2 border-gray-400 w-80 "
        />
        <input
          type="text"
          value={phoneNumber}
         //defaultValue={props.phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
          className="p-2 border-2 border-gray-400 w-80 "
        />
        <input
          type="text"
          value={salary}
          //defaultValue={props.salary}
          onChange={(e) => setSalary(e.target.value)}
          placeholder="Salary"
          className="p-2 border-2 border-gray-400 w-80 "
        />
        <input
          type="text"
          value={bio}
          //defaultValue={props.bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Bio"
          className="p-2 border-2 border-gray-400 w-80 "
        />
        <input
          type="text"
          value={photo}
          //defaultValue={props.photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="photo"
          className="p-2 border-2 border-gray-400 w-80 "
        />
        <div className="flex items-center justify-start">
          {/* <input type="checkbox" checked={active} onChange={() => setActive(!active)}/> */}
        </div>
        <select
          value={departmentName}
          onChange={(e) => setDepartmentName(e.target.value)}
          className="p-2 border-2 w-80 border-gray-400"
        >
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
          <option value="Design">Design</option>
          <option value="Engineering">Engineering</option>
        </select>
        <input
          type="submit"
          className="border rounded bg-blue-500 p-2 text-blue-100"
          value="Submit"
        />
      </form>
    </div>
  )
}
export default EditEmployee
