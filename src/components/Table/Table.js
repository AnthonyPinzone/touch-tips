import * as React from "react";

export default function Table({ children, className }) {
  return (
    <div
      className={`p-0 lg:pb-4 bg-black bg-opacity-50 text-white text-xl md:rounded-lg lg:text-2xl ${className}`}
    >
      {children}
    </div>
  );
}
