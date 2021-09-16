import * as React from "react";

import Layout from "../components/layout";
import Header from "../components/Header";
import Seo from "../components/seo";
import ScoreSheet from "../components/ScoreSheet";
import ScoreCard from "../components/ScoreCard";
import {
  Awards,
  YouBlewItAward,
  EfficientlyEfficientAward,
  TeamOfTheWeekAward,
} from "../components/Awards/";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <Header weekNumber="One" />

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
      <ScoreCard>
        <ScoreCard.Team
          name="Najee by Nature"
          score="114.60"
          optimal="137.13"
          studs={[
            { name: "Josh Allen", score: "21.90" },
            { name: "David Montgomery", score: "18.30" },
            { name: "Ty'Son Williams", score: "16.90" },
          ]}
          duds={[
            { name: "Courtland Sutton", score: "1.90" },
            { name: "Najee Harris", score: "5.40" },
            { name: "Jonnu Smith", score: "7.30" },
          ]}
          bench={[
            { name: "Ja'Marr Chase", score: "18.40" },
            { name: "Nyheim Hines", score: "11.43" },
          ]}
        />
        <ScoreCard.Team
          name="Smashers"
          score="120.28"
          optimal="140.38"
          winner
          studs={[
            { name: "Rob Gronkowski", score: "25.00" },
            { name: "Lamar Jackson", score: "22.35" },
            { name: "Ceedee Lamb", score: "20.30" },
          ]}
          duds={[
            { name: "Marquez Callaway", score: "1.90" },
            { name: "Kyle Pitts", score: "5.10" },
            { name: "Henry Ruggs III", score: "6.70" },
          ]}
          bench={[{ name: "Sterling Shepard", score: "20.80" }]}
        />
      </ScoreCard>

      <ScoreCard>
        <ScoreCard.Team
          name="Hasta Laviska Baby"
          score="103.70"
          optimal="132.43"
          winner
          studs={[{ name: "Jalen Hurts", score: "37.40" }]}
          duds={[
            { name: "Aaron Jones", score: "3.20" },
            { name: "Allen Robinson", score: "6.50" },
            { name: "Calvin Ridley", score: "7.60" },
          ]}
          bench={[
            { name: "Jamaal Williams", score: "21.00" },
            { name: "Jalen Reagor", score: "14.53" },
          ]}
        />
        <ScoreCard.Team
          name="All Chubbed Up"
          score="97.18"
          optimal="133.45"
          studs={[
            { name: "Tom Brady", score: "38.95" },
            { name: "Nick Chubb", score: "21.10" },
          ]}
          duds={[
            { name: "Brandon Aiyuk", score: "0.23" },
            { name: "Saquon Barkley", score: "3.20" },
            { name: "Mike Evans", score: "3.90" },
            { name: "Julio Jones", score: "4.40" },
          ]}
          bench={[
            { name: "Antonio Brown", score: "21.20" },
            { name: "Cole Beasley", score: "10.00" },
          ]}
        />
      </ScoreCard>

      <ScoreCard>
        <ScoreCard.Team
          name="Ezekiel 25-17"
          score="151.05"
          optimal="156.65"
          studs={[
            { name: "Dak Prescott", score: "37.45" },
            { name: "DeAndre Hopkins", score: "23.30" },
            { name: "D'Andre Swift", score: "20.40" },
          ]}
          duds={[
            { name: "Parris Campbell", score: "2.90" },
            { name: "Ezekiel Elliott", score: "4.90" },
          ]}
        />
        <ScoreCard.Team
          name="Full Nelson"
          score="158.70"
          optimal="164.80"
          winner
          studs={[
            { name: "Russell Wilson", score: "37.60" },
            { name: "Tyreek Hill", score: "31.60" },
            { name: "Christian Kirk", score: "21.50" },
            { name: "Cooper Kupp", score: "20.30" },
          ]}
          duds={[
            { name: "Mike Gesicki", score: "0.00" },
            { name: "Kenny Golladay", score: "8.40" },
          ]}
          bench={[{ name: "David Johnson", score: "10.30" }]}
        />
      </ScoreCard>

      <ScoreCard>
        <ScoreCard.Team
          name="Dak and Yellow"
          score="171.95"
          optimal="178.85"
          winner
          studs={[
            { name: "Patrick Mahomes", score: "42.65" },
            { name: "Tyler Lockett", score: "24.00" },
            { name: "Christian McCaffrey", score: "23.20" },
            { name: "T.J. Hockenson", score: "21.70" },
          ]}
          duds={[{ name: "James Conner", score: "5.30" }]}
          bench={[{ name: "Dallas Goedert", score: "12.20" }]}
        />
        <ScoreCard.Team
          name="Daddy Day Care"
          score="167.35"
          optimal="167.35"
          studs={[
            { name: "Kyler Murray", score: "44.45" },
            { name: "Amari Cooper", score: "32.40" },
            { name: "Travis Kelce", score: "22.60" },
          ]}
          duds={[
            { name: "Tyler Boyd", score: "4.70" },
            { name: "Jakobi Meyers", score: "7.40" },
            { name: "George Kittle", score: "9.80" },
          ]}
        />
      </ScoreCard>

      <ScoreCard>
        <ScoreCard.Team
          name="DoucheNukemV3"
          score="92.68"
          optimal="102.85"
          studs={[
            { name: "Joe Mixon", score: "23.00" },
            { name: "Dalvin Cook", score: "17.40" },
            { name: "Darrell Henderson Jr.", score: "15.20" },
          ]}
          duds={[
            { name: "Aaron Rodgers", score: "2.65" },
            { name: "Mecole Hardman", score: "3.63" },
            { name: "Zach Ertz", score: "4.40" },
            { name: "Michael Pittman Jr.", score: "4.40" },
          ]}
          bench={[
            { name: "Gerald Everett", score: "9.00" },
            { name: "Chase Claypool", score: "8.50" },
          ]}
        />
        <ScoreCard.Team
          name="Gage Interest"
          score="127.50"
          optimal="144.23"
          winner
          studs={[
            { name: "Matthew Stafford", score: "33.55" },
            { name: "Corey Davis", score: "24.20" },
            { name: "D.J. Chark Jr.", score: "16.10" },
          ]}
          duds={[
            { name: "Russell Gage", score: "0.00" },
            { name: "Derrick Henry", score: "9.20" },
          ]}
          bench={[{ name: "Juwan Johnson", score: "15.60" }]}
        />
      </ScoreCard>

      <ScoreCard>
        <ScoreCard.Team
          name="Captain Kamaraca II"
          score="139.30"
          optimal="159.95"
          winner
          studs={[
            { name: "Deebo Samuel", score: "27.40" },
            { name: "Adam Thielen", score: "25.70" },
            { name: "Darren Waller", score: "21.50" },
          ]}
          duds={[
            { name: "Raheem Mostert", score: "2.00" },
            { name: "James Robinson", score: "6.90" },
            { name: "Clyde Edwards-Helaire", score: "8.70" },
          ]}
          bench={[
            { name: "Carson Wentz", score: "24.85" },
            { name: "Devonta Smith", score: "16.10" },
          ]}
        />
        <ScoreCard.Team
          name="Stevens's Superb Team"
          score="113.48"
          optimal="113.48"
          studs={[
            { name: "Kirk Cousins", score: "29.55" },
            { name: "Josh Jacobs", score: "16.50" },
            { name: "Jaylen Waddle", score: "14.10" },
          ]}
          duds={[
            { name: "Mark Andrews", score: "3.50" },
            { name: "Davante Adams", score: "8.10" },
            { name: "Leonard Fournette", score: "8.40" },
          ]}
        />
      </ScoreCard>
    </ScoreSheet>
  </Layout>
);

export default IndexPage;
