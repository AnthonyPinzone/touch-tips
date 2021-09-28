import * as React from "react";

import { Layout } from "../../components/Layout/";
import { Seo } from "../../components/Seo/";
import { ScoreSheet, ScoreCard } from "../../components/Scores/";
import {
  Awards,
  YouBlewItAward,
  MondayNightMiracleAward,
  TeamOfTheWeekAward,
} from "../../components/Awards/";

import data from "../../data/2021/week-3.json";

export default function WeekThree2021({ location }) {
  const { matchups } = data;
  return (
    <Layout location={location} weekNumber="Three">
      <Seo title="Week Three" />

      <Awards>
        <TeamOfTheWeekAward team="Ezekiel 25-17" className="md:order-2" />
        <MondayNightMiracleAward
          team="Captain Kamaraca II"
          className="md:mt-5 md:mb-5 md:order-1"
        />
        <YouBlewItAward
          team="Dak and Yellow"
          className="md:mt-5 md:mb-5 md:order-3"
        />
      </Awards>

      <ScoreSheet>
        {matchups.map(matchup => (
          <ScoreCard
            key={`${matchup.team1.id}-${matchup.team2.id}`}
            season="2021"
            week="3"
            matchup={matchup}
          />
        ))}
      </ScoreSheet>
    </Layout>
  );
}
