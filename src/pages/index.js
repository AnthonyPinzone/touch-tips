import React from "react";
import { navigate } from "gatsby";

// Redirect to latest week
// @TODO: Come up w/ a homepage design that can include the scores.
export default function HomePage() {
  React.useEffect(() => {
    navigate("/2021/week-7/");
  }, []);
  return null;
}
