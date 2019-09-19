const path = require('path');

const layoutMapper = {
  'post': path.resolve(__dirname, `../src/templates/blog-post.js`)
};

module.exports = layoutMapper;
