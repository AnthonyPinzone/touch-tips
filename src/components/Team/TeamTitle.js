import React from "react";

const TeamTitle = ({ preview, name, score, winner }) => (
  <div className="flex justify-between">
    <div
      className={`flex-1 flex items-center p-3 text-2xl ${
        winner && "bg-green-800"
      } md:text-3xl`}
    >
      {name}
    </div>
    <div
      className={`relative flex items-center justify-center py-3 w-20 text-center text-3xl ${
        winner ? "bg-green-900" : "bg-black bg-opacity-30"
      } md:w-24 md:text-4xl`}
    >
      {preview && (
        <span className="absolute w-full bottom-0 left-1/2 transform -translate-x-1/2 text-sm">
          Points Per Game
        </span>
      )}
      {score}
    </div>
  </div>
);

export default TeamTitle;
