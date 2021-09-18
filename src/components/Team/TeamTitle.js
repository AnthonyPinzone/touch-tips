import React from "react";

const TeamTitle = ({ name, score, winner }) => (
  <div className="flex justify-between">
    <span
      className={`flex-1 flex items-center p-3 text-2xl ${
        winner && "bg-green-800"
      } md:text-3xl`}
    >
      {name}
    </span>
    <span
      className={`flex items-center justify-center p-3 w-20 text-center text-3xl ${
        winner ? "bg-green-900" : "bg-black bg-opacity-30"
      } md:w-24 md:text-4xl`}
    >
      {score}
    </span>
  </div>
);

export default TeamTitle;
