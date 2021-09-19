import React from "react";
import { calculatePercentage } from "../../utilities/math-calculations";

const Detail = ({ label, value }) => (
  <span className="font-light">
    <span className="block leading-none text-gray-300 text-base md:text-lg md:leading-tight">
      {label}
    </span>
    <span className="block leading-tight font-sans-alt text-base">{value}</span>
  </span>
);

const TeamDetails = ({ preview, score, optimal, rank, record }) => {
  const efficiency = calculatePercentage(score, optimal);
  return (
    <div className="flex justify-between uppercase bg-gray-800 px-3 py-1 text-lg text-center md:text-xl">
      <Detail label="Rank" value={rank} />
      <Detail label="Record" value={record} />
      <Detail label={preview ? "Optimal Avg." : "Optimal"} value={optimal} />
      <Detail label="Efficiency" value={efficiency} />
    </div>
  );
};

export default TeamDetails;
