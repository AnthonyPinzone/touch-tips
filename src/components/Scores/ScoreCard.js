import React from "react";
import { Team } from "../Team/";
import SeriesRecord from "./SeriesRecord";

const ScoreCard = ({ team1, team2 }) => {
  return (
    <div className="relative mb-10 font-sans md:mb-0 xl:bg-gray-900 xl:bg-opacity-25 xl:border xl:border-white xl:border-opacity-25 xl:p-3 xl:pt-5 xl:rounded-md xl:shadow-lg xl:mb-5">
      <SeriesRecord team1={team1.id} team2={team2.id} />

      <div className="flex flex-col gap-1 md:gap-5 md:flex-row">
        <Team {...team1} />
        <Team {...team2} />
      </div>
    </div>
  );
};

export default ScoreCard;
