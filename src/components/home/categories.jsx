const Categories = ({mainCategories}) => {
    return (
        <div className="flex flex-wrap overflow-x-auto no-scrollbar">
            {mainCategories.map((category, index) => (
                <p key={index} className='font-medium cursor-pointer px-6 py-4 whitespace-nowrap hover:text-green-600 transition-colors duration-200'>
                    {category}
                </p>
            ))}
        </div>
    )
}

export default Categories