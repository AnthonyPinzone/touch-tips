import data from "../data/teams.json";

export default function getTeamById(team) {
  if (!data || !team) return console.error("Unable to retrieve team data");

  return data.teams.find(item => item.id === team);
}
