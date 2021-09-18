import React from "react";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";

const TeamExpandButton = ({ expanded, onClick }) => (
  <button
    className="flex items-center justify-center w-full p-1 md:hidden"
    onClick={onClick}
  >
    {expanded ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
  </button>
);

export default TeamExpandButton;
