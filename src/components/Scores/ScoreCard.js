import React from "react";
import { Team } from "../Team/";
import SeriesRecord from "./SeriesRecord";
import getTeamById from "../../utilities/getTeamById";
import { calculateAverage } from "../../utilities/math-calculations";

const ScoreCard = ({ preview = false, season, week, matchup }) => {
  const { team1, team2 } = matchup;
  const adjustedWeek = Number(week) - 1; // Adjusted for array indexing
  const team1Score = getTeamById(team1.id)["seasons"][season].finalScores[
    adjustedWeek
  ];
  const team2Score = getTeamById(team2.id)["seasons"][season].finalScores[
    adjustedWeek
  ];
  const winner = Number(team1Score) > Number(team2Score) ? team1.id : team2.id;

  const formatTeamDetails = team => {
    const teamData = getTeamById(team.id)["seasons"][season];
    return {
      ...team,
      name: teamData.name,
      rank: teamData.rank,
      record: teamData.record,
      score: preview
        ? calculateAverage(teamData.finalScores)
        : teamData.finalScores[adjustedWeek],
      optimal: preview
        ? calculateAverage(teamData.optimalScores)
        : teamData.optimalScores[adjustedWeek],
      winner: !preview && winner === team.id,
    };
  };

  return (
    <div className="relative mb-10 font-sans md:mb-0 xl:bg-gray-900 xl:bg-opacity-25 xl:border xl:border-white xl:border-opacity-25 xl:p-3 xl:pt-5 xl:rounded-md xl:shadow-lg xl:mb-5">
      <SeriesRecord team1={team1.id} team2={team2.id} />

      <div className="flex flex-col gap-1 md:gap-5 md:flex-row">
        <Team preview={preview} {...formatTeamDetails(team1)} />
        <Team preview={preview} {...formatTeamDetails(team2)} />
      </div>
    </div>
  );
};

export default ScoreCard;
