import React from "react";
import getSeriesRecord from "../../utilities/getSeriesRecord";

const SeriesRecord = ({ team1, team2 }) => (
  <div className="bg-cyan-500 bg-opacity-50 border border-cyan-500 text-white flex items-center justify-center rounded-sm align-middle px-3 py-1 mb-1 w-40 md:py-0 md:px-2 xl:absolute xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:-translate-y-10">
    <span className="uppercase text-sm md:text-base">Series Record</span>
    <span className="flex-1 text-center text-xl leading-none md:text-2xl">
      {getSeriesRecord(team1, team2)}
    </span>
  </div>
);

export default SeriesRecord;
