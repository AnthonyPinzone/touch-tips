import * as React from "react";

export default function TableRow({ children, className, rowNumber }) {
  return (
    <ol
      className={`flex flex-wrap w-full items-center justify-between pb-5 md:flex-nowrap md:px-5 md:pt-1 md:pb-1 md:hover:bg-green-600 ${
        className ? className : ""
      }`}
    >
      <li className="order-2 md:order-1 md:w-10 px-5 md:pl-0 md:text-right">
        <span className="inline-block mr-2 w-16 text-gray-200 md:hidden">
          Rank:
        </span>
        {rowNumber + 1}
      </li>
      {children}
    </ol>
  );
}
