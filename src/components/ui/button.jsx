import Icon from "./icon";

const Button = ({
  text,
  variant = "primary",
  icon,
  iconPosition = "right",
  className = "",
  width,
  height,
  marginTop,
  bg,
  disabled = false,
  children,
  ...props
}) => {

  // Base styling
  const baseClasses = `
    inline-flex items-center justify-center 
    transition-all duration-300 
    focus:outline-none focus:ring-2 focus:ring-offset-2 
    disabled:opacity-60 disabled:cursor-not-allowed
    cursor-pointer
  `;

  // Variant styles
  const variants = {
    primary: "text-white bg-green-600 hover:bg-green-700",
    secondary: "text-gray-800 bg-gray-100 hover:bg-gray-200",
    outline: "border border-green-600 text-green-600 hover:bg-green-600 hover:text-white",
  };

  // Dynamic background support (color code or Tailwind class)
  const bgClass = bg?.startsWith("#") ? "" : bg || "";
  const style = bg?.startsWith("#") ? { backgroundColor: bg } : {};

  return (
    <button
      style={style}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant] || ""} ${bgClass} ${className} ${width || ""} ${height || ""} ${marginTop || ""}`}
      {...props}
    >
      {icon && iconPosition === "left" && <Icon name={icon} className="mr-2 w-5 h-5" />}
      {children}
      {icon && iconPosition === "right" && <Icon name={icon} className="ml-2 w-5 h-5" />}
    </button>
  );
};

export default Button;