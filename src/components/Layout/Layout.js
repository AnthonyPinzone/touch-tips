import * as React from "react";
import Main from "./Main";
import Header from "./Header";

const Layout = ({ children, weekNumber }) => {
  return (
    <>
      <Header weekNumber={weekNumber} />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
