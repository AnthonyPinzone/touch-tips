import * as React from "react";

import { Layout } from "../../components/Layout/";
import { Seo } from "../../components/Seo/";
import { ScoreSheet, ScoreCard } from "../../components/Scores/";

import data from "../../data/2021/week-2.json";

export default function WeekTwo2021({ location }) {
  const { matchups } = data;
  return (
    <Layout location={location} weekNumber="Two">
      <Seo title="Week Two" />

      {/* <Awards>
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
      </Awards> */}

      <ScoreSheet>
        {matchups.map(matchup => (
          <ScoreCard
            key={`${matchup.team1.id}-${matchup.team2.id}`}
            season="2021"
            week="2"
            matchup={matchup}
          />
        ))}
      </ScoreSheet>
    </Layout>
  );
}
