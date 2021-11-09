import * as React from "react";

import { Layout } from "../../components/Layout/";
import { Seo } from "../../components/Seo/";
import { ScoreSheet, ScoreCard } from "../../components/Scores/";
import {
  Awards,
  YouBlewItAward,
  ByTheSkinOfYourTeethAward,
  TeamOfTheWeekAward,
} from "../../components/Awards/";

import data from "../../data/2021/week-9.json";

export default function WeekFour2021({ location }) {
  const { matchups } = data;
  return (
    <Layout location={location} weekNumber="Nine">
      <Seo title="Week Nine" />

      <Awards>
        <TeamOfTheWeekAward team="All Chubbed Up" className="md:order-2" />
        <ByTheSkinOfYourTeethAward
          team="Full Nelson"
          className="md:mt-5 md:mb-5 md:order-1"
        />
        <YouBlewItAward
          team="Najee By Nature"
          className="md:mt-5 md:mb-5 md:order-3"
        />
      </Awards>

      <ScoreSheet>
        {matchups.map(matchup => (
          <ScoreCard
            key={`${matchup.team1.id}-${matchup.team2.id}`}
            season="2021"
            week="9"
            matchup={matchup}
          />
        ))}
      </ScoreSheet>
    </Layout>
  );
}
