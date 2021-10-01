import * as React from "react";

export default function TableColumn({
  children,
  className,
  customStyle,
  mobileTitle,
}) {
  return (
    <li
      className={
        customStyle
          ? customStyle
          : `flex-none px-5 w-1/2 sm:w-1/3 md:px-0 md:flex-1 md:w-auto text-left md:text-center  ${
              className ? className : ""
            }`
      }
    >
      {mobileTitle && (
        <span className="inline-block mr-2 w-16 text-gray-200 md:hidden">
          {mobileTitle}:
        </span>
      )}
      <span>{children}</span>
    </li>
  );
}
