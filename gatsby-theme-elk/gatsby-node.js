const fs = require('fs');
const path = require('path');

const { createFilePath } = require('gatsby-source-filesystem');

const calculateReadTime = require(path.resolve(__dirname, './utils/calc-read-time'));
const layoutMapper = require('./utils/layout-mapper');
const wrapTagPath = require('./utils/wrap-tag-slug');

// Make sure the data directory exists
// exports.onPreBootstrap = ({ reporter }, options) => {
//   const contentPath = options.contentPath || "data";
//   if (!fs.existsSync(contentPath)) {
//     reporter.info(`creating the ${contentPath} directory`);
//     fs.mkdirSync(contentPath);
//   }
// };

// Define the "Event" type
// exports.sourceNodes = ({ actions }) => {
//   actions.createTypes(`
//     type Blog implements Node @dontInfer {
//       id: ID!
//       name: String!
//       location: String!
//       startDate: Date! @dateformat @proxy(from: "start_date")
//       endDate: Date! @dateformat @proxy(from: "end_date")
//       url: String!
//       slug: String!
//     }
//   `);
// };


// Define resolvers for custom fields
// exports.createResolvers = ({ createResolvers }, options) => {
//   const basePath = options.basePath || "/";
//   // Quick-and-dirty helper to convert strings into URL-friendly slugs.
//   const slugify = str => {
//     const slug = str
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, "-")
//       .replace(/(^-|-$)+/g, "");
//     return `/${basePath}/${slug}`.replace(/\/\/+/g, "/");
//   };
//   createResolvers({
//     Blog: {
//       slug: {
//         resolve: source => slugify(source.name),
//       },
//     },
//   });
// };

exports.createPages = ({ graphql, actions }, options) => {
  const { createPage } = actions;
  const { postsPerPage = 20 } = options;

  return graphql(
    `
      {
        postsRemark: allMarkdownRemark(
          filter: { fileAbsolutePath: {regex : "\/blog-posts/"} }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 2000
        ) {
          edges {
            node {
              rawMarkdownBody
              fields {
                slug
              }
              frontmatter {
                title
                layout
              }
            }
          }
        }
        pagesRemark: allMarkdownRemark(
          filter: { fileAbsolutePath: {regex : "\/pages/"} }
          limit: 2000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                layout
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `,
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.postsRemark.edges;
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;
      const readTime = calculateReadTime(post.node.rawMarkdownBody);
      const layoutComponent = layoutMapper[post.node.frontmatter.layout];

      createPage({
        path: post.node.fields.slug,
        component: layoutComponent,
        context: {
          slug: post.node.fields.slug,
          previous,
          readTime,
          next,
        },
      });
    });

    // Create pages.
    const pages = result.data.pagesRemark.edges;
    pages.forEach((page, index) => {
      const layoutComponent = layoutMapper[page.node.frontmatter.layout || 'page'];

      createPage({
        path: page.node.fields.slug,
        component: layoutComponent,
        context: {
          slug: page.node.fields.slug,
        },
      });
    });

    // Create tags page
    const tags = result.data.tagsGroup.group;
    tags.forEach((tag, idx) => {
      const tagPath = wrapTagPath(tag.fieldValue);
      // `/tags/${_.kebabCase(tag.fieldValue)}/`;
      tags[idx].tagPath = tagPath;
      createPage({
        path: tagPath,
        component: layoutMapper.tags,
        context: {
          tag: tag.fieldValue,
        },
      });
    });

    // Create blog post list pages
    // const postsPerPage = 2;
    const numPages = Math.ceil(posts.length / postsPerPage);
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? '/' : `/${i + 1}`,
        component: layoutMapper.blogList,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          totalPosts: posts.length,
          numPages,
          tags,
          currentPage: i + 1,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }, options) => {
  const { createNodeField } = actions;
  const timeRegExp = /(((19[2-9]\d{1})|(20\d{2}))-)?((0?[1-9])|(1[0-2]))-((0?[1-9])|([1-2][0-9])|30|31)-/;

  if (node.internal.type === 'MarkdownRemark') {
    let value = createFilePath({ node, getNode });
    const basePath = options.basePath || '/';
    const slugify = (str) => {
      const slugArr = str.split('/').filter((s) => !!s);
      let currSlug = slugArr[slugArr.length - 1];
      currSlug = currSlug.replace(timeRegExp, '');
      currSlug = currSlug.replace(/\s+/g, '');
      return `/${basePath}/${currSlug}`.replace(/\/\/+/g, '/');
    };
    value = slugify(value);
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};
