import { useEffect, useState } from "react"

interface Department {
    name: string,
    description: string
}
const createDepartment = async (data: Department) => {
    const url = 'https://localhost:7029/Department'
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data)
    })
    const result = await response.json()
}
const AddDepartment = () => {
  const [departmentName, setDepartmentName] = useState<any>()
  const [departmentDescription, setDepartmentDescription] = useState<any>()
  const [department, setDepartment] = useState<Department>({
      name: "",
      description: ""
  })

  useEffect(() => {
    setDepartment({
        name: departmentName,
        description: departmentDescription
    })
  
    return () => {
    }
  }, [departmentDescription, departmentName])
  
  const handleSubmit = () => {
    alert("department added")
    createDepartment(department)
  }
  return (
    <div className="w-[30rem] h-[40rem] absolute border-2 rounded-lg bg-white shadow-lg left-[50rem] top-[20rem]">
      <form onSubmit={handleSubmit}
        className="flex-col flex space-y-2 items-center">
        <input
          type="text"
          value={departmentName}
          onChange={(e) => setDepartmentName(e.target.value)}
          placeholder="Department"
          className="p-2 border-2 border-gray-400 w-80 "
        />
        <input
          type="text"
          value={departmentDescription}
          onChange={(e) => setDepartmentDescription(e.target.value)}
          placeholder="Description"
          className="p-2 border-2 border-gray-400 w-80 "
        />
        <input
          type="submit"
          className="border rounded bg-blue-500 p-2 text-blue-100"
          value="Submit"
        />
      </form>
    </div>
  )
}
export default AddDepartment
