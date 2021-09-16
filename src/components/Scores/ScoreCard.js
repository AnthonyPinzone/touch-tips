import React from "react";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import { calculatePercentage } from "../../utilities/math-calculations";

const Image = ({ src, alt }) => (
  <figure className="aspect-w-16 aspect-h-9">
    <img className="object-cover object-top" src={src} alt={alt} />
  </figure>
);

const Card = ({ children }) => (
  <div className="flex-1 text-gray-100 border border-gray-800 rounded-sm bg-gray-900 xl:rounded-md xl:overflow-hidden">
    {children}
  </div>
);

const Title = ({ name, score, winner }) => (
  <div className="flex justify-between">
    <span
      className={`flex-1 flex items-center p-3 text-2xl ${
        winner && "bg-green-800"
      } md:text-3xl`}
    >
      {name}
    </span>
    <span
      className={`flex items-center justify-center p-3 w-20 text-center text-3xl ${
        winner ? "bg-green-900" : "bg-black bg-opacity-30"
      } md:w-24 md:text-4xl`}
    >
      {score}
    </span>
  </div>
);

const Subtitle = ({ score, optimal }) => (
  <div className="flex justify-between uppercase bg-gray-800 px-3 py-1 text-lg md:text-xl">
    <span className="font-light">
      <span className="text-gray-300 mr-1 text-base md:text-lg">Optimal:</span>{" "}
      <span className="font-sans-alt text-sm">{optimal}</span>
    </span>
    <span className="font-light">
      <span className="text-gray-300 mr-1 text-base md:text-lg">
        Efficiency:
      </span>{" "}
      <span className="font-sans-alt text-sm">
        {calculatePercentage(score, optimal)}
      </span>
    </span>
  </div>
);

const Body = ({ children, expanded }) => (
  <div
    className={`overflow-hidden px-3 transition-all ${
      expanded ? "max-h-96 py-3" : "max-h-0 py-0"
    } md:max-h-[none] md:p-3`}
  >
    {children}
  </div>
);

const List = ({ title, items }) => (
  <>
    <span className="text-lg md:text-2xl">{title}</span>
    <ol className="uppercase text-gray-200 mb-2">
      {items.map(item => (
        <li className="flex justify-between items-center">
          <span className="font-sans-alt text-xs md:text-sm">{item.name}</span>
          <span className="flex-1 border-b border-dotted mx-2" />
          <span className="leading-none md:text-xl md:leading-tight">
            {item.score}
          </span>
        </li>
      ))}
    </ol>
  </>
);

const Team = ({ name, score, optimal, winner, studs, duds, bench }) => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <Card>
      <Title name={name} score={score} winner={winner} />
      <Subtitle score={score} optimal={optimal} />
      <Body expanded={expanded}>
        {studs && <List title="Studs" items={studs} />}
        {duds && <List title="Duds" items={duds} />}
        {bench && <List title="Bench Heroes" items={bench} />}
      </Body>
      <button
        className="flex items-center justify-center w-full p-1 md:hidden"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
      </button>
    </Card>
  );
};

const ScoreCard = ({ children }) => (
  <div className="flex flex-col gap-1 mb-10 font-sans md:mb-0 md:gap-5 md:flex-row xl:bg-black xl:bg-opacity-10 xl:border xl:border-white xl:border-opacity-25 xl:p-3 xl:rounded-md xl:shadow-lg">
    {children}
  </div>
);

ScoreCard.Image = Image;
ScoreCard.Team = Team;

export default ScoreCard;
