const React = require("react");
const { LoaderDOM, LoadedDOM } = require('./utils/loader-script');

exports.onRenderBody = ({
  setPostBodyComponents, setPreBodyComponents, setHeadComponents
}) => {
  // setHeadComponents([
  //   <script
  //     key="1"
  //     type="text/javascript"
  //     src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"/>,
  // ]);
  setPreBodyComponents([
    <LoaderDOM />
  ]);
  setPostBodyComponents([
    <>
      {/* <LoadedDOM /> */}
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"></link>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/github-markdown-css@3.0.1/github-markdown.min.css"></link>

      <script src="https://cdn.jsdelivr.net/npm/prismjs@1.17.1/prism.min.js" defer></script>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.17.1/themes/prism.css"></link>
      
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js" defer></script>
      {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />
      <script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script> */}

      <script src="https://cdnjs.cloudflare.com/ajax/libs/photoset-grid/1.0.1/jquery.photoset-grid.min.js" defer></script>
    </>
  ]);
};
