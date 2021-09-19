import React from "react";
import KeysToTheGame from "./KeysToTheGame";
import TeamContent from "./TeamContent";
import TeamDetails from "./TeamDetails";
import TeamExpandButton from "./TeamExpandButton";
import TeamPlayerList from "./TeamPlayerList";
import TeamTitle from "./TeamTitle";

const Team = ({
  name,
  rank,
  record,
  score,
  optimal,
  winner,
  keys = [],
  studs = [],
  duds = [],
  bench = [],
  preview,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="shadow-lg flex-1 text-gray-100 border border-gray-800 rounded-md bg-gray-900 xl:rounded-md xl:overflow-hidden">
      <TeamTitle preview={preview} name={name} score={score} winner={winner} />
      <TeamDetails
        preview={preview}
        rank={rank}
        record={record}
        score={score}
        optimal={optimal}
      />
      <TeamContent expanded={expanded}>
        {preview && keys.length > 0 && <KeysToTheGame keys={keys} />}
        {!preview && studs.length > 0 && (
          <TeamPlayerList title="Studs" items={studs} />
        )}
        {!preview && duds.length > 0 && (
          <TeamPlayerList title="Duds" items={duds} />
        )}
        {!preview && bench.length > 0 && (
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
