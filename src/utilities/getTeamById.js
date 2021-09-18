export default function getTeamById(data, team) {
  if (!data || !team) return console.error("Unable to retrieve team data");

  return data.find(item => item.id === team);
}
