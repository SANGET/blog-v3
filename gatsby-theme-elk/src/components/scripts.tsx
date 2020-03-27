import React from 'react';
// import { ShowModal } from '@deer-ui/core/modal';
// import { getScreenWidth } from '@deer-ui/core/utils/screen';

// const getImgWidth = (url) => new Promise((resolve) => {
//   const img = new Image();
//   img.onload = function () {
//     resolve(this.width);
//   };
//   img.src = url;
// });

const Scripts = () => {
  React.useEffect(() => {
    window.$(document).ready(() => {
      (function ($) {
        $('.photoset-grid').photosetGrid({});

        $(document.links).filter(function () {
          return this.hostname !== window.location.hostname;
        }).attr('target', '_blank');

        if (window.mediumZoom) window.mediumZoom('img');
      }(window.jQuery));
    });
  }, []);
  return null;
};

export default Scripts;
