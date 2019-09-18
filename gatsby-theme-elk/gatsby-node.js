const fs = require("fs");
const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

// Make sure the data directory exists
exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || "data";
  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

// Define the "Event" type
// exports.sourceNodes = ({ actions }) => {
//   actions.createTypes(`
//     type Event implements Node @dontInfer {
//       id: ID!
//       name: String!
//       location: String!
//       startDate: Date! @dateformat @proxy(from: "start_date")
//       endDate: Date! @dateformat @proxy(from: "end_date")
//       url: String!
//       slug: String!
//     }
//   `)
// }


// Define resolvers for custom fields
exports.createResolvers = ({ createResolvers }, options) => {
  const basePath = options.basePath || "/";
  // Quick-and-dirty helper to convert strings into URL-friendly slugs.
  const slugify = str => {
    const slug = str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
    return `/${basePath}/${slug}`.replace(/\/\/+/g, "/");
  };
  createResolvers({
    Event: {
      slug: {
        resolve: source => slugify(source.name),
      },
    },
  });
};

exports.createPages = ({ graphql, actions }, options) => {
  const { createPage } = actions;
  const { postsPerPage = 10 } = options;

  const blogPostTMPL = path.resolve(__dirname, `./src/templates/blog-post.js`);
  const blogListTMPL = path.resolve(__dirname, './src/templates/blog-list.js');
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: post.node.fields.slug,
        component: blogPostTMPL,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      });
    });

    // Create blog post list pages
    // const postsPerPage = 2;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/` : `/${i + 1}`,
        component: blogListTMPL,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          totalPosts: posts.length,
          numPages,
          currentPage: i + 1
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
