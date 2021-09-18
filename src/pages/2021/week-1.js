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

import data from "../../data/2021/week-1.json";

export default function WeekOne2021({ location }) {
  const {
    teams: {
      commish,
      ron,
      cliff,
      vin,
      jim,
      chris,
      alex,
      shane,
      luke,
      aj,
      brandon,
      steve,
    },
  } = data;
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
        <ScoreCard team1={commish} team2={ron} />
        <ScoreCard team1={cliff} team2={vin} />
        <ScoreCard team1={jim} team2={chris} />
        <ScoreCard team1={alex} team2={shane} />
        <ScoreCard team1={luke} team2={aj} />
        <ScoreCard team1={brandon} team2={steve} />
      </ScoreSheet>
    </Layout>
  );
}
