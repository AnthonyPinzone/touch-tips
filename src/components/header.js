import * as React from "react";
import PropTypes from "prop-types";

const Header = ({ weekNumber }) => (
  <header className="text-white text-center pt-3 md:pt-5">
    <h1 className="text-3xl sm:text-4xl">
      Touch Tips 2021 - Week {weekNumber}
    </h1>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  weekNumber: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
  weekNumber: "",
};

export default Header;
