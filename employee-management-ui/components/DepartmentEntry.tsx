import { useEffect, useState } from "react"

interface Department {
    id: number
    name: string
    description: string
}
const deleteDepartment = async (data: Department) => {
    const url = 'https://localhost:7029/Department/DeleteDepartment'
    const response = await fetch(url, {
        method: 'DELETE',
        mode: 'cors',
        body: JSON.stringify(data.name)
    })
    const result = await response.json()
}
const DepartmentEntry: React.FC <Department> = (props) => {
    const [departmentName, setDepartmentName] = useState<any>()
  const [departmentDescription, setDepartmentDescription] = useState<any>()
    const [department, setDepartment] = useState<Department>({
        id: 0,
        name: "",
        description: ""
    })
    useEffect(() => {
      setDepartment({
          id: props.id,
          name: props.name,
          description: props.description
      })
    
      return () => {

      }
    }, [props.description, props.id, props.name])
    
    return (
        <div>
            <ul className="grid grid-cols-4 space-y-8 border-b border-b-gray-300 py-4">
                <li>{props.id}</li>
                <li>{props.name}</li>
                <li className="">{props.description}</li>
                <li><button onClick={() => deleteDepartment(department)}>Delete</button></li>
            </ul>
            
        </div>
    )
}
export default DepartmentEntry