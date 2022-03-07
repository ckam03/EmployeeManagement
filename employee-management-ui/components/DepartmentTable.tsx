import { useEffect, useState } from "react"
import DepartmentEntry from "./DepartmentEntry"

interface Department {
    name: string
    description: string
}
const getDepartments = async () => {
    const url = 'https://localhost:7029/Department'
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
    })
    const result = await response.json()
    return result
}
const DepartmentTable = () => {
    const [departmentData, setDepartmentData] = useState<Department[]>([])
    useEffect(() => {
    getDepartments().then((data) => {
        setDepartmentData(data)
    })
      return () => {

      }
    }, [])
    console.log(departmentData[0]);
    
    return (
        <div>
            <ul className="grid grid-cols-4 border-2 rounded border-black font-semibold">
                <li>Id</li>
                <li>Department Name</li>
                <li>Department Description</li>
                <li>Actions</li>
            </ul>
            {departmentData.map((department: any, index: number) => {
                return (
                    <DepartmentEntry key={index} id={department.id} name={department.departmentName} description={department.description}/>
                )
            })}
        </div>
    )
}
export default DepartmentTable