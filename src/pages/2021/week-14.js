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

import data from "../../data/2021/week-14.json";

export default function WeekFour2021({ location }) {
  const { matchups } = data;
  return (
    <Layout location={location} weekNumber="Fourteen">
      <Seo title="Week Fourteen" />

      <Awards>
        <TeamOfTheWeekAward team="All Chubbed Up" className="md:order-2" />
        <FlaminHotCheetosAward
          team="Say Hello To My Kittle Friend"
          className="md:mt-5 md:mb-5 md:order-1"
        />
        <YouBlewItAward
          team="Captain Kirks Mission"
          className="md:mt-5 md:mb-5 md:order-3"
        />
      </Awards>

      <ScoreSheet>
        {matchups.map(matchup => (
          <ScoreCard
            key={`${matchup.team1.id}-${matchup.team2.id}`}
            season="2021"
            week="14"
            matchup={matchup}
          />
        ))}
      </ScoreSheet>
    </Layout>
  );
}
