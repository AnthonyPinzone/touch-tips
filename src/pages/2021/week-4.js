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

import data from "../../data/2021/week-4.json";

export default function WeekFour2021({ location }) {
  const { matchups } = data;
  return (
    <Layout location={location} weekNumber="Four">
      <Seo title="Week Four" />

      <Awards>
        <TeamOfTheWeekAward team="Captain Kamaraca II" className="md:order-2" />
        <EfficientlyEfficientAward
          team="Najee by Nature"
          className="md:mt-5 md:mb-5 md:order-1"
        />
        <YouBlewItAward
          team="All Chubbed Up"
          className="md:mt-5 md:mb-5 md:order-3"
        />
      </Awards>

      <ScoreSheet>
        {matchups.map(matchup => (
          <ScoreCard
            key={`${matchup.team1.id}-${matchup.team2.id}`}
            season="2021"
            week="4"
            matchup={matchup}
          />
        ))}
      </ScoreSheet>
    </Layout>
  );
}
