import React from "react";

const Awards = ({ children }) => (
  <div className="grid grid-cols-1 px-5 pt-5 gap-5 max-w-4xl mx-auto md:grid-cols-3 lg:gap-10 lg:px-10 lg:pt-10">
    {children}
  </div>
);

export default Awards;
