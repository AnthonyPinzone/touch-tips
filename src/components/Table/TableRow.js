import * as React from "react";

export default function TableRow({ children, className, rowNumber }) {
  return (
    <ol
      className={`flex flex-wrap w-full items-center justify-between pb-5 md:flex-nowrap md:px-5 md:pt-1 md:pb-1 md:hover:bg-green-600 ${
        className ? className : ""
      }`}
    >
      <li className="w-10 pr-5 text-right">{rowNumber + 1}</li>
      {children}
    </ol>
  );
}
