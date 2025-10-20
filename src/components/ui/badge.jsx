const Badge = ({ 
  text, 
  leftIcon, 
  rightIcon, 
  variant = "default",
  size = "md",
  className = "",
  onClick 
}) => {

  // Variant styles
  const variants = {
    default: "bg-gray-100 text-gray-800 border border-gray-300",
    primary: "bg-[#74BD43] text-white border border-blue-300",
    secondary: "bg-[#FFEA01] text-black border border-gray-300",
    success: "bg-green-100 text-green-800 border border-green-300",
    danger: "bg-red-100 text-red-800 border border-red-300",
    warning: "bg-yellow-100 text-yellow-800 border border-yellow-300",
    info: "bg-cyan-100 text-cyan-800 border border-cyan-300",
    discount: "bg-[#74BD43] text-white",
    rating: "bg-[#74BD43] text-white",
    outline: "bg-transparent text-gray-800 border border-gray-300"
  };

  // Size styles
  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base"
  };

  const baseClasses = "inline-flex items-center justify-center font-medium rounded-full whitespace-nowrap";
  const variantClasses = variants[variant] || variants.default;
  const sizeClasses = sizes[size] || sizes.md;

  return (
    <div 
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      onClick={onClick}
    >
      {leftIcon && <span className="mr-1.5">{leftIcon}</span>}
      {text}
      {rightIcon && <span className="ml-1.5">{rightIcon}</span>}
    </div>
  );
};

export default Badge;