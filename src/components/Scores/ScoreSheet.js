import React from "react";

const ScoreSheet = ({ children }) => (
  <div className="mx-auto grid grid-cols-1 p-5 md:gap-5 xl:grid-cols-2 xl:p-10 2xl:container">
    {children}
  </div>
);

export default ScoreSheet;
