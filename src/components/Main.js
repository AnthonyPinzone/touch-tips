import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const BackgroundImage = () => (
  <div className="absolute w-full h-full z-0 bg-gray-900">
    <StaticImage
      className="absolute w-full h-full object-cover object-center opacity-25"
      src="../images/football-on-field.jpg"
      alt="A football on a field"
    />
  </div>
);

const ContentWrapper = ({ children }) => (
  <div className="relative z-10">{children}</div>
);

const Main = ({ children }) => (
  <main className="relative min-h-screen w-full">
    <BackgroundImage />
    <ContentWrapper>{children}</ContentWrapper>
  </main>
);

export default Main;
