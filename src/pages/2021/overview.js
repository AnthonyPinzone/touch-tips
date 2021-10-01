import * as React from "react";

import { Layout } from "../../components/Layout/";
import { Seo } from "../../components/Seo/";
import {
  Table,
  TableHeaderRow,
  TableHeaderColumn,
  TableRow,
  TableColumn,
} from "../../components/Table/";

import {
  calculateAverage,
  calculatePercentage,
  calculateTotal,
} from "../../utilities/math-calculations";

import data from "../../data/teams.json";

function fetchStandings() {
  const { teams } = data;
  let standings = [];
  teams.map(team =>
    standings.push({
      name: team.seasons[2021].name,
      record: team.seasons[2021].record,
      points: calculateTotal(team.seasons[2021].finalScores),
      ppg: calculateAverage(team.seasons[2021].finalScores),
      optimal: calculateTotal(team.seasons[2021].optimalScores),
      opg: calculateAverage(team.seasons[2021].optimalScores),
      efficiency: calculatePercentage(
        calculateTotal(team.seasons[2021].finalScores),
        calculateTotal(team.seasons[2021].optimalScores)
      ),
    })
  );

  return standings.sort(
    (a, b) => b.record.localeCompare(a.record) || a.points < b.points
  );
}

export default function Overview2021({ location }) {
  const [standings, setStandings] = React.useState(fetchStandings());
  const [sortedBy, setSortedBy] = React.useState("");

  const sortStandings = sortCategory => {
    let sortedStandings;
    if (sortCategory === "efficiency") {
      sortedStandings = [...standings].sort(
        (a, b) =>
          Number(a.efficiency.replace("%", "")) <
          Number(b.efficiency.replace("%", ""))
      );
    } else if (sortCategory === "points") {
      sortedStandings = [...standings].sort((a, b) => a.points < b.points);
    } else if (sortCategory === "optimal") {
      sortedStandings = [...standings].sort((a, b) => a.optimal < b.optimal);
    } else {
      sortedStandings = [...standings].sort(
        (a, b) => b.record.localeCompare(a.record) || a.points < b.points
      );
    }
    setSortedBy(sortCategory);
    setStandings(sortedStandings);
  };

  return (
    <Layout location={location}>
      <Seo title="League Overview 2021" />

      <div className="max-w-4xl mx-auto">
        <h2 className="pt-20 text-white text-4xl uppercase text-center pb-5 md:px-5 md:text-5xl md:text-left">
          Standings &amp; Stats
        </h2>

        <div className="mb-5 px-10 max-w-xs mx-auto md:hidden">
          <label
            className="block text-white uppercase text-xl"
            htmlFor="sortingDropdown"
          >
            Sort Standings By:
          </label>
          <select
            id="sortingDropdown"
            className="block w-full font-sans-alt tracking-wider focus:ring-green-600 focus:border-green-600"
            onChange={e => sortStandings(e.target.value)}
          >
            <option value="">Record</option>
            <option value="points">Points</option>
            <option value="optimal">Optimal</option>
            <option value="efficiency">Efficiency</option>
          </select>
        </div>

        <Table>
          <TableHeaderRow>
            <TableHeaderColumn customStyle="w-44" title="Team Name" />
            <TableHeaderColumn
              onClick={() => sortStandings()}
              sorted={!sortedBy}
              title="Record"
            />
            <TableHeaderColumn
              onClick={() => sortStandings("points")}
              sorted={sortedBy === "points"}
              title="Points"
            />
            <TableHeaderColumn
              onClick={() => sortStandings("points")}
              sorted={sortedBy === "points"}
              title="Pts/Gm"
            />
            <TableHeaderColumn
              onClick={() => sortStandings("optimal")}
              sorted={sortedBy === "optimal"}
              title="Optimal"
            />
            <TableHeaderColumn
              onClick={() => sortStandings("optimal")}
              sorted={sortedBy === "optimal"}
              title="Opt/Gm"
            />
            <TableHeaderColumn
              onClick={() => sortStandings("efficiency")}
              sorted={sortedBy === "efficiency"}
              title="Efficiency"
            />
          </TableHeaderRow>

          {standings &&
            standings.map(team => (
              <TableRow key={team.name}>
                <TableColumn customStyle="mb-2 px-5 text-2xl w-full bg-green-600 md:mb-0 md:px-0 md:bg-transparent md:w-44">
                  {team.name}
                </TableColumn>
                <TableColumn mobileTitle="Record">{team.record}</TableColumn>
                <TableColumn mobileTitle="Points">{team.points}</TableColumn>
                <TableColumn mobileTitle="Pts/Gm">{team.ppg}</TableColumn>
                <TableColumn mobileTitle="Optimal">{team.optimal}</TableColumn>
                <TableColumn mobileTitle="Opt/Gm">{team.opg}</TableColumn>
                <TableColumn mobileTitle="Efficiency">
                  {team.efficiency}
                </TableColumn>
              </TableRow>
            ))}
        </Table>
      </div>
    </Layout>
  );
}
