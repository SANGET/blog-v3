module.exports = {
  // pathPrefix: 'https://cdn.jsdelivr.net/gh/SANGET/gatsby-theme-elk@master/',
  siteMetadata: {
    title: `{思行合一}`,
    author: `Alex Zhang`,
    description: `思考 | 记录 | 实现 | 分享技术的价值`,
    siteUrl: `https://thinkmore.xyz`,
    social: {
      // twitter: `sanget`,
      mail: `zh.sanget@gmail.com`,
      github: `https://github.com/SANGET`,
    },
    footer: {
      showBuildInfo: true,
      since: 2013
    }
  },
  plugins: [
    {
      resolve: "gatsby-theme-elk",
      options: {
        blogContentPath: `${__dirname}/content/blog-posts`,
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
