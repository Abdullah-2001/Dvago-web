const Card = ({ props, children }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200"
            {...props}>
            {children}
        </div>
    )
}

export default Card