import React from "react";

const Header = ({ weekNumber }) => (
  <header className="sticky top-0 z-20 bg-gradient-to-b from-gray-800 to-gray-900 border-t border-t-gray-900 text-white text-center p-3">
    <h1 className="text-3xl sm:text-4xl">
      Touch Tips 2021 - Week {weekNumber}
    </h1>

    <span className="absolute left-0 -bottom-1 block w-full h-1 bg-gradient-to-r from-green-600 to-green-800" />
  </header>
);

export default Header;
