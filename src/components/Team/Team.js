import React from "react";
import TeamContent from "./TeamContent";
import TeamDetails from "./TeamDetails";
import TeamExpandButton from "./TeamExpandButton";
import TeamPlayerList from "./TeamPlayerList";
import TeamTitle from "./TeamTitle";

const Team = ({ details, studs, duds, bench }) => {
  const [expanded, setExpanded] = React.useState(false);
  const { name, score, optimal, rank, record, winner } = details;
  return (
    <div className="shadow-lg flex-1 text-gray-100 border border-gray-800 rounded-md bg-gray-900 xl:rounded-md xl:overflow-hidden">
      <TeamTitle name={name} score={score} winner={winner} />
      <TeamDetails
        rank={rank}
        record={record}
        score={score}
        optimal={optimal}
      />
      <TeamContent expanded={expanded}>
        {studs.length > 0 && <TeamPlayerList title="Studs" items={studs} />}
        {duds.length > 0 && <TeamPlayerList title="Duds" items={duds} />}
        {bench.length > 0 && (
          <TeamPlayerList title="Bench Heroes" items={bench} />
        )}
      </TeamContent>

      <TeamExpandButton
        expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      />
    </div>
  );
};

export default Team;
