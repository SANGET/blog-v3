module.exports = ({
  blogContentPath = 'blog',
  pagesContentPath = 'pages',
  assetContentPath = 'asset',
  siteTitle = 'gatsby-theme-elk',
  author = 'gatsby-theme-elk\'s Author',
  description = 'description',
  siteUrl = 'https://github.com/SANGET/gatsby-theme-elk',
  social = {
    // twitter: `sanget`,
    mail: 'zh.sanget@gmail.com',
    github: 'https://github.com/SANGET',
  },
  footer = {
    showBuildInfo: true,
    since: 2019,
  },
  sideMenu = [
    {
      title: 'Blog',
      path: '/',
    },
    {
      title: 'Archive',
      path: '/archive',
    },
    {
      title: 'Tags',
      path: '/tags',
    },
    {
      title: 'About',
      path: '/about',
    },
  ],
}) => ({
  siteMetadata: {
    title: siteTitle,
    author,
    description,
    siteUrl,
    social,
    footer,
    sideMenu,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: blogContentPath,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: pagesContentPath,
        name: 'page',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: assetContentPath,
        name: 'assets',
      },
    },
    // {
    //   resolve: "gatsby-transformer-yaml",
    //   options: {
    //     typeName: "Event",
    //   },
    // },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-feed',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-advanced-sitemap',
    // {
    //   resolve: `gatsby-plugin-postcss`,
    //   options: {
    //     postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
    //   },
    // },
  ],
});
