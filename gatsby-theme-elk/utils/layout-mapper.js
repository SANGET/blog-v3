const path = require('path');

const layoutMapper = {
  'post': path.resolve(__dirname, `../src/templates/blog-post.js`),
  'tags': path.resolve(__dirname, './src/templates/tags.js'),
  'blogList': path.resolve(__dirname, './src/templates/blog-list.js'),
};

module.exports = layoutMapper;
