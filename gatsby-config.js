module.exports = {
  // pathPrefix: 'https://cdn.jsdelivr.net/gh/SANGET/gatsby-theme-elk@master/',
  siteMetadata: {
    title: `{思行合一}`,
    author: `Alex Zhang`,
    description: `A blog of Alex Zhang.`,
    siteUrl: `https://thinkmore.xyz`,
    social: {
      twitter: `sanget`,
    },
  },
  plugins: [
    {
      resolve: "gatsby-theme-elk",
      options: {
        blogContentPath: `${__dirname}/content/blog`,
        assetContentPath: `${__dirname}/content/assets`,
        pagesContentPath: `${__dirname}/content/pages`,
        basePath: "/",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-125030746-1`,
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alex's Blog`,
        short_name: `思行合一`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#376bfb`,
        display: `minimal-ui`,
        icon: `content/assets/profile-pic.jpg`,
      },
    },
  ],
};
