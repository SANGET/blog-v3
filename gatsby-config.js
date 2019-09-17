module.exports = {
  siteMetadata: {
    title: `{思行合一}`,
    author: `Alex Zhang`,
    description: `A blog of Alex Zhang.`,
    siteUrl: `https://ukelli.com`,
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
        basePath: "/",
      },
    },
  ],
};
