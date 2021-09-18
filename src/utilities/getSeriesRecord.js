import data from "../data/series-records.json";

export default function getSeriesRecord(team1, team2) {
  if (!team1 || !team2) {
    return console.error("Unable to retrieve series record.");
  }
  return data[team1][team2];
}
