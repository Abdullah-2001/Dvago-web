import SvgIcon from "../../assets/icons/svg/icons";

const Input = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  icon,
  iconPosition = "left",
  variant = "primary",
  className = "",
  width = "w-full",
  height = "",
  ...props
}) => {

  const baseClasses = "text-[14px] focus:outline-none focus:ring-2 transition-all duration-200";

  const variants = {
    primary: "bg-white text-gray-800 placeholder-gray-400 focus:ring-white",
    secondary: "bg-gray-100 text-gray-700 placeholder-gray-400 focus:ring-accent",
    outline: "bg-transparent border border-gray-300 text-gray-800 placeholder-gray-400 focus:ring-accent",
    gradient: "bg-gradient-to-br from-[#e4f5dc] to-[#a9cf86] text-gray-800 placeholder-gray-600 focus:ring-green-500",
  };

  return (
    <>
      {icon && iconPosition === "left" && (
        <div className="absolute top-[3px] left-2 text-gray-600 pointer-events-none">
          {icon}
        </div>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${baseClasses} ${variants[variant]} ${className} ${icon ? (iconPosition === "left" ? "pl-10" : "pr-10") : ""}`}
        {...props}
      />
      {icon && iconPosition === "right" && (
        <div className="absolute top-2 right-3 text-gray-600 pointer-events-none">
          {icon}
        </div>
      )}
    </>
  );
};

export default Input;
