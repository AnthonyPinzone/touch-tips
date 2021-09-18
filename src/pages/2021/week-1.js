import * as React from "react";

import { Layout } from "../../components/Layout/";
import { Seo } from "../../components/Seo/";
import { ScoreSheet, ScoreCard } from "../../components/Scores/";
import {
  Awards,
  YouBlewItAward,
  EfficientlyEfficientAward,
  TeamOfTheWeekAward,
} from "../../components/Awards/";

import getTeamById from "../../utilities/getTeamById";

import data from "../../data/2021/week-1.json";

export default function WeekOne2021({ location }) {
  const { teams } = data;

  return (
    <Layout location={location} weekNumber="One">
      <Seo title="Week One" />

      <Awards>
        <TeamOfTheWeekAward
          team="Dak and Yellow"
          className="md:order-2 bg-yellow-300 border-yellow-300"
        />
        <EfficientlyEfficientAward
          team="Full Nelson"
          className="md:mt-5 md:mb-5 md:order-1 bg-yellow-500 border-yellow-500"
        />
        <YouBlewItAward
          team="DoucheNukemV3"
          className="md:mt-5 md:mb-5 md:order-3 bg-yellow-900 border-yellow-900"
        />
      </Awards>

      <ScoreSheet>
        <ScoreCard
          team1={getTeamById(teams, "commish")}
          team2={getTeamById(teams, "ron")}
        />
        <ScoreCard
          team1={getTeamById(teams, "cliff")}
          team2={getTeamById(teams, "vin")}
        />
        <ScoreCard
          team1={getTeamById(teams, "jim")}
          team2={getTeamById(teams, "chris")}
        />
        <ScoreCard
          team1={getTeamById(teams, "alex")}
          team2={getTeamById(teams, "shane")}
        />
        <ScoreCard
          team1={getTeamById(teams, "luke")}
          team2={getTeamById(teams, "aj")}
        />
        <ScoreCard
          team1={getTeamById(teams, "brandon")}
          team2={getTeamById(teams, "steve")}
        />
      </ScoreSheet>
    </Layout>
  );
}
