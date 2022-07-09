module.exports = {
  siteMetadata: {
    title: `Coding Nexus`,
    description: `Coding Nexus is a social community for developers to learn and socialize online. For anyone interested, this is also a place to find a tutor, choose to be a tutor, or take part in our paid bootcamp program`,
    author: `Kevin Napier`,
    menuLinks: [
      {
        name: 'about',
        link: '/about/',
      },
      {
        name: 'blog',
        link: '/blog/',
      },
      {
        name: 'contact',
        link: '/contact/',
      },
      {
        name: 'testimonials',
        link: '/testimonials/',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require('tailwindcss')],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: { tailwind: true },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Coding Nexus`,
        short_name: `CN`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/icons/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
