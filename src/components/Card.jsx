import React from "react";

function Card({ className = "", children, ...props }) {
  return (
    <div
      className={`rounded-xl border bg-white text-black shadow-sm ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}

function CardHeader({ className = "", children, ...props }) {
  return (
    <div className={`flex flex-col ga-1.5 p-6 ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

function CardTitle({ className = "", children, ...props }) {
  return (
    <div
      className={`tex-lg font-semibold leading-none tracking-tight ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}

function CardDescription({ className = "", children, ...props }) {
  return (
    <div className={`text-sm text-gray-500 ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

function CardContent({ className = "", children, ...props }) {
  return (
    <div className={`p-6 pt-0 ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

function CardFooter({ className = "", children, ...props }) {
  return (
    <div
      className={`flex items-center p-6 pt-0 ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};

export default Card;
