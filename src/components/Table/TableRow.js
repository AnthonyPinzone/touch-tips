import * as React from "react";

export default function TableRow({ children, className }) {
  return (
    <ul
      className={`flex flex-wrap w-full justify-between pb-5 md:flex-nowrap md:px-5 md:pt-1 md:pb-1 md:hover:bg-green-600 ${
        className ? className : ""
      }`}
    >
      {children}
    </ul>
  );
}
