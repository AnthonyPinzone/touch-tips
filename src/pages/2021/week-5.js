import * as React from "react";

import { Layout } from "../../components/Layout/";
import { Seo } from "../../components/Seo/";
import { ScoreSheet, ScoreCard } from "../../components/Scores/";

import data from "../../data/2021/week-5.json";

export default function WeekFour2021({ location }) {
  const { matchups } = data;
  return (
    <Layout location={location} weekNumber="Five">
      <Seo title="Week Five" />

      <ScoreSheet>
        {matchups.map(matchup => (
          <ScoreCard
            preview
            key={`${matchup.team1.id}-${matchup.team2.id}`}
            season="2021"
            week="5"
            matchup={matchup}
          />
        ))}
      </ScoreSheet>
    </Layout>
  );
}
