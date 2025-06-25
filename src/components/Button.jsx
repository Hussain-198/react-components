import React from "react";

const VARIANT_CLASSES = {
  default: "bg-blue-500 text-white hover:bg-blue-600",
  outline:
    "border border-gray-300 text-white-500 bg-transparent hover:bg-blue-50",
  destructive: "bg-red-500 text-white hover:bg-red-700",
  secondary: "bg-gray-400 text-white hover:bg-gray-600",
  ghost: "bg-transparent hover:bg-gray-200",
  link: "hover:underline",
};

const SIZE_CLASSES = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-md",
  lg: "px-2 py-1 text-lg",
};

function Button({
  variant = "default",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const variantClass = VARIANT_CLASSES[variant] || VARIANT_CLASSES.default;
  const sizeClass = SIZE_CLASSES[size] || SIZE_CLASSES.md;
  return (
    <button
      className={`rounded-md ${variantClass} ${sizeClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;