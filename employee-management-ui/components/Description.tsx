interface Description {
    description: string
}

const Description: React.FC<Description> = (props) => {
    return (
        <div className="z-50 bg-gray-200 border rounded p-2 mt-6">
            {props.description}
        </div>
    )
}
export default Description