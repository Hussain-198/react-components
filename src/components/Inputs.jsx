import React from "react";

const Input = React.forwardRef(
  ({ className = "", label, id, ...props }, ref) => (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium mb-1">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={id}
        className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background 
        file:border-0 file:bg-transparent file:text-sm file:font-medium 
        placeholder:text-muted-foreground 
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
        disabled:cursor-not-allowed disabled:opacity-50 
        ${className}`}
        {...props}
      />
    </div>
  )
);

export default Input;
