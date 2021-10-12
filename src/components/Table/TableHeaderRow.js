import * as React from "react";

export default function TableHeaderRow({ children, className }) {
  return (
    <ul
      className={`hidden md:flex w-full justify-between px-5 pt-5 pb-2 mb-2 border-b-2 border-green-600 uppercase ${
        className ? className : ""
      }`}
    >
      <li className="w-10"></li>
      {children}
    </ul>
  );
}
