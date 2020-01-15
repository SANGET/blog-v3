const path = require('path');

const layoutMapper = {
  post: path.resolve(__dirname, '../src/templates/blog-post.tsx'),
  page: path.resolve(__dirname, '../src/templates/page.tsx'),
  tags: path.resolve(__dirname, '../src/templates/tags.tsx'),
  blogList: path.resolve(__dirname, '../src/templates/blog-list.tsx'),
};

module.exports = layoutMapper;
