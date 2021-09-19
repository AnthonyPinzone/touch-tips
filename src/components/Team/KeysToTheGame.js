import React from "react";
import { BiKey } from "react-icons/bi";

const KeysToTheGame = ({ keys }) => (
  <>
    <h4 className="text-lg md:text-2xl mb-2">Keys to the Game</h4>
    <ul className=" text-gray-200 mb-0">
      {keys.map(key => (
        <li
          className="mb-1 flex items-start justify-start font-sans-alt text-xs md:text-sm"
          key={key}
        >
          <BiKey className="text-yellow-400 flex-grow-0 flex-shrink-0 text-xl" />
          <span className="pl-2">{key}</span>
        </li>
      ))}
    </ul>
  </>
);

export default KeysToTheGame;
