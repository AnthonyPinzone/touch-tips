import * as React from "react";
import PropTypes from "prop-types";
import Main from "./Main";

const Layout = ({ children }) => {
  return (
    <>
      <Main>{children}</Main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
