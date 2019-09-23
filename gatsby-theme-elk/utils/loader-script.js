const React = require('react');

const script = `
<script>
window.addEventListener('DOMContentLoaded', (event) => {
  document.body.removeChild(document.querySelector('#loadingBg'));
});
</script>`;

const LoaderDOM = () => {
  return (
    <div className="__loader" id="loadingBg">
      <div id="shadow"></div>
      <div id="box"></div>
    </div>
  );
};
const LoadedDOM = () => {
  return (
    <div dangerouslySetInnerHTML={{__html: script}}></div>
  );
};

module.exports.LoaderDOM = LoaderDOM;
module.exports.LoadedDOM = LoadedDOM;