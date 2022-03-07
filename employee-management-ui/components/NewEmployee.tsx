import { ChangeEvent, useEffect, useState } from "react"

interface Employee {
  firstName: string
  lastName: string
  emailAddress: string
  phoneNumber: string
  salary: number
  photo: any
  bio: string
  department: {
    departmentName: any
    description: string
  }
}

const createEmployee = async (data: Employee) => {
    const url = "https://localhost:7029/Employee/CreateEmployee"
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const result = await response.json()
    console.log(result);
    
    return result
  }

const NewEmployee = () => {
  const handleSubmit = () => {
    alert("data sent")
    createEmployee(employee)
    console.log(employee)
  }
  const [firstName, setFirstName] = useState<any>()
  const [lastName, setLastName] = useState<any>()
  const [email, setEmail] = useState<any>()
  const [phoneNumber, setPhoneNumber] = useState<any>()
  const [salary, setSalary] = useState<any>()
  const [bio, setBio] = useState<any>()
  const [photo, setPhoto] = useState<any>()
  const [departmentName, setDepartmentName] = useState<any>()
  const [departmentDescription, setDepartmentDescription] = useState()
  const [employee, setEmployee] = useState<Employee>({
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
      firstName: firstName,
      lastName: lastName,
      emailAddress: email,
      phoneNumber: phoneNumber,
      salary: salary,
      bio: bio,
      photo: photo,
      department: {
        departmentName: departmentName,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis, enim nec dignissim elementum, diam neque viverra leo, a tincidunt urna lorem sit amet augue. Quisque aliquet eros eget commodo pellentesque. Duis iaculis porttitor hendrerit. Suspendisse euismod semper nulla id suscipit. Vestibulum mollis hendrerit sem sit amet eleifend. Mauris tempor sem a dignissim viverra. Phasellus ultricies pulvinar rutrum.Curabitur a nisi dui. Integer commodo porta aliquam. Vestibulum a lorem a lectus tincidunt ullamcorper. Quisque interdum congue mi, ut finibus lectus malesuada ut. Phasellus sollicitudin ligula sed diam lacinia pulvinar. Praesent eleifend ullamcorper accumsan. Proin aliquam nibh nulla, vitae fermentum metus lacinia eu. Ut rutrum eleifend magna, eget mattis enim rutrum et. Curabitur accumsan mauris nec volutpat sodales. Nam placerat fringilla justo. Aliquam tincidunt malesuada nibh a tempus. Donec in nisl in quam condimentum porta ut vitae est. Donec scelerisque id sapien nec ultricies.Ut congue elit nunc, sed tempor nisi vestibulum quis. Sed dapibus bibendum erat, vel dapibus dolor. Sed mollis est id ante tempor euismod. Aenean nec cursus turpis. Integer urna nisl, malesuada eget suscipit in, vestibulum et nulla. Donec auctor tortor vel placerat tempor. Quisque augue augue, sodales vitae lacus non, luctus tempus diam. Phasellus non elit ac.",
      },
    })
    return () => {}
  }, [bio, departmentName, email, firstName, lastName, phoneNumber, photo, salary])

  return (
    <div className="w-[30rem] h-[40rem] absolute border-2 rounded-lg bg-white shadow-lg left-[50rem] top-[20rem]">
      <h1 className="text-center text-3xl py-6">Create new employee</h1>
      <form
        onSubmit={handleSubmit}
        className="flex-col flex space-y-2 items-center"
      >
        <input
          type="text"
          defaultValue={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          className="p-2 border-2 border-gray-400 w-80 "
        />
        <input
          type="text"
          defaultValue={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          className="p-2 border-2 border-gray-400 w-80 "
        />
        <input
          type="email"
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="p-2 border-2 border-gray-400 w-80 "
        />
        <input
          type="text"
          defaultValue={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
          className="p-2 border-2 border-gray-400 w-80 "
        />
        <input
          type="text"
          defaultValue={salary}
          onChange={(e) => setSalary(e.target.value)}
          placeholder="Salary"
          className="p-2 border-2 border-gray-400 w-80 "
        />
        <input
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Bio"
          className="p-2 border-2 border-gray-400 w-80"
        />
        <input
          type="text"
          defaultValue={photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="photo"
          className="p-2 border-2 border-gray-400 w-80"
        />
        
        <select
          value={departmentName}
          onChange={(e) => setDepartmentName(e.target.value)}
          className="p-2 border-2 w-80 border-gray-400"
        >
          <option value=" " disabled></option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
          <option value="Design">Design</option>
          <option value="Engineering">Engineering</option>
        </select>
        {/* <input type="file" onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (!e.target.files) return 
            setPhoto(e.target.files[0])
        }} className="w-80" /> */}
        <input
          type="submit"
          className="border rounded bg-blue-500 p-2 text-blue-100"
          value="Submit"
        />
      </form>
    </div>
  )
}
export default NewEmployee
