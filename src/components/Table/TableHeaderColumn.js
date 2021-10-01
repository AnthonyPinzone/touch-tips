import * as React from "react";
import { AiFillCaretDown } from "react-icons/ai";

export default function TableHeaderColumn({
  title,
  className,
  customStyle,
  onClick,
  sorted,
}) {
  return (
    <li
      className={
        customStyle
          ? customStyle
          : `flex-1 relative text-center cursor-pointer ${
              className ? className : ""
            }`
      }
      onClick={onClick}
    >
      {title}
      {sorted && (
        <AiFillCaretDown className="text-green-600 inline-block w-4 -mr-5 ml-1 -mt-1" />
      )}
    </li>
  );
}
