import React from "react";
import { Team } from "../Team/";

const ScoreCard = ({ team1, team2 }) => (
  <div className="flex flex-col gap-1 mb-10 font-sans md:mb-0 md:gap-5 md:flex-row xl:bg-gray-900 xl:bg-opacity-25 xl:border xl:border-white xl:border-opacity-25 xl:p-3 xl:rounded-md xl:shadow-lg">
    <Team {...team1} />
    <Team {...team2} />
  </div>
);

export default ScoreCard;
