module.exports = {
  siteMetadata: {
    title: `Touch Tips Fantasy Football`,
    description: `A fun little project to enhance our fantasy football league.`,
    author: `@AnthonyP1nzone`,
    siteUrl: `https://touch-tips.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
