import React from "react";

const TeamPlayerList = ({ title, items }) => (
  <>
    <span className="text-lg md:text-2xl">{title}</span>
    <ol className="uppercase text-gray-200 mb-2">
      {items.map(item => (
        <li className="flex justify-between items-center" key={item.name}>
          <span className="font-sans-alt text-xs md:text-sm">{item.name}</span>
          <span className="flex-1 border-b border-dotted mx-2" />
          <span className="leading-none md:text-xl md:leading-tight">
            {item.score}
          </span>
        </li>
      ))}
    </ol>
  </>
);

export default TeamPlayerList;
