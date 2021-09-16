import React from "react";
import { GiPodiumWinner } from "react-icons/gi";
import { FaPoop } from "react-icons/fa";
import { BiTimer } from "react-icons/bi";

const Award = ({
  awardStyles,
  awardIcon,
  awardIconStyles = "",
  awardName,
  awardDescription,
  team,
}) => (
  <div
    className={`flex flex-col items-center text-white text-center p-2.5 rounded-md border border-opacity-50 bg-opacity-10 md:p-5 ${awardStyles}`}
  >
    <div className={`text-6xl h-16 flex items-end ${awardIconStyles}`}>
      {awardIcon}
    </div>
    <h2 className="text-3xl my-2">{team}</h2>
    <div className="flex items-center self-stretch mb-1">
      <div className="border-b border-gray-300 flex-1"></div>
      <div className="uppercase px-2 text-center text-2xl font-light">
        {awardName}
      </div>
      <div className="border-b border-gray-300 flex-1"></div>
    </div>
    <div className="uppercase text-gray-200 font-sans-alt text-xs">
      {awardDescription}
    </div>
  </div>
);

const YouBlewItAward = ({ className, team }) => (
  <Award
    awardName="You Blew It!!!"
    awardStyles={className}
    awardDescription="The worst scoring team of the week... often owned by the most vile fantasy football player in the league."
    awardIcon={<FaPoop />}
    awardIconStyles="text-yellow-900 text-5xl"
    team={team}
  />
);

const EfficientlyEfficientAward = ({ className, team }) => (
  <Award
    awardName="Efficiently Efficient"
    awardStyles={className}
    awardDescription="The WINNING team with the highest starting efficiency... because just being efficient isn't enough to win."
    awardIcon={<BiTimer />}
    awardIconStyles="text-yellow-500"
    team={team}
  />
);

const TeamOfTheWeekAward = ({ className, team }) => (
  <Award
    awardName="Team of the Week"
    awardStyles={className}
    awardDescription="The highest scoring team of the week... this person is a fantasy football hero, and he'll let you know it."
    awardIcon={<GiPodiumWinner />}
    awardIconStyles="text-yellow-300"
    team={team}
  />
);

export { YouBlewItAward, EfficientlyEfficientAward, TeamOfTheWeekAward };
