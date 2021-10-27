import * as React from "react";

import { Layout } from "../../components/Layout/";
import { Seo } from "../../components/Seo/";
import { ScoreSheet, ScoreCard } from "../../components/Scores/";
import {
  Awards,
  YouBlewItAward,
  FlaminHotCheetosAward,
  TeamOfTheWeekAward,
} from "../../components/Awards/";

import data from "../../data/2021/week-7.json";

export default function WeekFour2021({ location }) {
  const { matchups } = data;
  return (
    <Layout location={location} weekNumber="Seven">
      <Seo title="Week Seven" />

      <Awards>
        <TeamOfTheWeekAward team="Full Nelson" className="md:order-2" />
        <FlaminHotCheetosAward
          team="Ezekiel 25-17"
          className="md:mt-5 md:mb-5 md:order-1"
        />
        <YouBlewItAward
          team="Smashers"
          className="md:mt-5 md:mb-5 md:order-3"
        />
      </Awards>

      <ScoreSheet>
        {matchups.map(matchup => (
          <ScoreCard
            key={`${matchup.team1.id}-${matchup.team2.id}`}
            season="2021"
            week="7"
            matchup={matchup}
          />
        ))}
      </ScoreSheet>
    </Layout>
  );
}
