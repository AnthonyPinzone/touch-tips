import React from "react";
import { Link } from "gatsby";
import { IoMdPodium } from "react-icons/io";

const matchupLinks = [
  {
    label: "Week 1",
    link: "/2021/week-1/",
  },
  {
    label: "Week 2",
    link: "/2021/week-2/",
  },
  {
    label: "Week 3",
    link: "/2021/week-3/",
  },
  {
    label: "Week 4",
    link: "/2021/week-4/",
  },
  {
    label: "Week 5",
    link: "/2021/week-5/",
  },
  {
    label: "Week 6",
    link: "/2021/week-6/",
  },
];

const Header = ({ location, weekNumber }) => {
  const [weeksExpanded, setWeeksExpanded] = React.useState(false);
  const currentPage = location.pathname;
  return (
    <header className="sticky top-0 z-20 flex flex-col justify-between bg-gradient-to-b from-gray-800 to-gray-900 border-t border-t-gray-900 text-white text-center md:flex-row">
      <h1 className="text-2xl sm:text-3xl md:pl-16 md:text-4xl">
        <Link className="block p-3" to="/">
          Touch Tips 2021 {weekNumber && `- Week ${weekNumber}`}
        </Link>
      </h1>

      <Link
        className="flex items-center justify-center bg-yellow-600 bg-opacity-25 hover:bg-opacity-100 border border-yellow-800 rounded-md w-10 h-10 absolute left-2 top-2 md:left-5 md:top-1/2 md:transform md:-translate-y-1/2 transition-all"
        to="/2021/overview"
      >
        <IoMdPodium className="text-3xl" />
        <span className="sr-only">2021 Stats and Standings</span>
      </Link>

      <div className="relative self-stretch w-full md:w-40 border-l border-gray-900 bg-gray-800">
        <button
          className={`h-full w-full py-2 text-lg hover:bg-gray-900 ${
            weeksExpanded ? "bg-gray-900" : ""
          }`}
          onClick={() => setWeeksExpanded(!weeksExpanded)}
        >
          View Scores
        </button>
        {weeksExpanded && (
          <nav className="absolute bg-gray-800 right-0 w-full z-30">
            {matchupLinks.map(matchup => (
              <Link
                className={`block py-2 hover:bg-green-700 ${
                  currentPage === matchup.link ? "bg-green-700" : ""
                }`}
                to={matchup.link}
                key={matchup.link}
              >
                {matchup.label}
              </Link>
            ))}
          </nav>
        )}
      </div>

      <span className="absolute left-0 -bottom-1 block w-full h-1 bg-gradient-to-r from-green-600 to-green-800" />
    </header>
  );
};

export default Header;
