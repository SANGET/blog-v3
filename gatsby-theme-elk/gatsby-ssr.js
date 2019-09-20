const React = require("react");

exports.onRenderBody = ({
  setPostBodyComponents,
}) => {
  // setHeadComponents([
  //   <script
  //     key="1"
  //     type="text/javascript"
  //     src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"/>,
  // ]);
  // setPreBodyComponents([
  //   <script
  //     key="2"
  //     type="text/javascript"
  //     src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/core.js"/>,
  // ]);
  setPostBodyComponents([
    <>
      <link key="4" rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"></link>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/github-markdown-css@3.0.1/github-markdown.min.css"></link>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.17.1/themes/prism.css"></link>
      <script src="https://cdn.jsdelivr.net/npm/prismjs@1.17.1/prism.min.js"></script>
    </>
  ]);
};
