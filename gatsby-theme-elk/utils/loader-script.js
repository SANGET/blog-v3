const React = require('react');

const script = `
<script>
window.addEventListener('DOMContentLoaded', (event) => {
  document.body.removeChild(document.querySelector('#loadingBg'));
});
</script>`;

const loaderCSS = `
<style>
.__loader {
  position: absolute;
  z-index: 11;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
}
@keyframes loader {
  0% { left: -100px }
  100% { left: 110%; }
}
#box {
  width: 50px;
  height: 50px;
  background: #376BFB;
  animation: animate .5s linear infinite;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 3px;
}
@keyframes animate {
  17% { border-bottom-right-radius: 3px; }
  25% { transform: translateY(9px) rotate(22.5deg); }
  50% {
    transform: translateY(18px) scale(1,.9) rotate(45deg) ;
    border-bottom-right-radius: 40px;
  }
  75% { transform: translateY(9px) rotate(67.5deg); }
  100% { transform: translateY(0) rotate(90deg); }
} 
#shadow { 
  width: 50px;
  height: 5px;
  background: #000;
  opacity: 0.1;
  position: absolute;
  top: 59px;
  left: 0;
  border-radius: 50%;
  animation: shadow .5s linear infinite;
}
@keyframes shadow {
  50% {
    transform: scale(1.2,1);
  }
}
</style>
`;

const LoaderDOM = () => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: loaderCSS }}></div>
      <div className="__loader" id="loadingBg">
        <div id="shadow"></div>
        <div id="box"></div>
      </div>
    </>
  );
};
const LoadedDOM = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: script }}></div>
  );
};

module.exports.LoaderDOM = LoaderDOM;
module.exports.LoadedDOM = LoadedDOM;
