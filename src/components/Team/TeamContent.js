import React from "react";

const TeamContent = ({ children, expanded }) => (
  <div
    className={`overflow-hidden px-3 transition-all ${
      expanded ? "max-h-96 py-3" : "max-h-0 py-0"
    } md:max-h-[none] md:p-3`}
  >
    {children}
  </div>
);

export default TeamContent;
