import Icon from "./icon";

const TextArea = ({
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
  marginTop = "",
  ...props
}) => {

  const baseClasses = "rounded-md px-4 py-3 md:py-4 focus:outline-none focus:ring-2 transition-all duration-200";

  const variants = {
    primary:
      "bg-white text-gray-800 placeholder-gray-400 focus:ring-white",
    secondary:
      "bg-gray-100 text-gray-700 placeholder-gray-400 focus:ring-accent",
    outline:
      "bg-transparent border border-gray-300 text-gray-800 placeholder-gray-400 focus:ring-accent",
  };

  return (
    <div
      className={`flex items-center ${width} ${height} ${marginTop} relative`}
    >
      {icon && iconPosition === "left" && (
        <Icon
          name={icon}
          className="absolute left-3 text-gray-400 pointer-events-none"
        />
      )}
      <textarea
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${baseClasses} ${variants[variant]} ${className} ${
          icon ? (iconPosition === "left" ? "pl-10" : "pr-10") : ""
        }`}
        {...props}
      />
      {icon && iconPosition === "right" && (
        <Icon
          name={icon}
          className="absolute right-3 text-gray-400 pointer-events-none"
        />
      )}
    </div>
  );
};

export default TextArea;
