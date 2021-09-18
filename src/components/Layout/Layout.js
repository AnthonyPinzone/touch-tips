import * as React from "react";
import Main from "./Main";
import Header from "./Header";

const Layout = ({ children, location = "", weekNumber }) => {
  return (
    <>
      <Header location={location} weekNumber={weekNumber} />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
