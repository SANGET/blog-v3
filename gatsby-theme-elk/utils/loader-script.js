const React = require('react');

const script = `
<script>
window.addEventListener('DOMContentLoaded', (event) => {
  document.body.removeChild(document.querySelector('#loadingBg'));
});
</script>`;

const LoaderScript = () => {
  return (
    <>
      <div className="__loader" id="loadingBg">
        <div id="shadow"></div>
        <div id="box"></div>
      </div>
      <div dangerouslySetInnerHTML={{__html: script}}></div>
    </>
  );
};

module.exports = LoaderScript;