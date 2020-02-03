import React from 'react';
// import { ShowModal } from '@deer-ui/core/modal';
// import { getScreenWidth } from '@deer-ui/core/utils/screen';

const getImgWidth = (url) => new Promise((resolve) => {
  const img = new Image();
  img.onload = function () {
    resolve(this.width);
  };
  img.src = url;
});

const Scripts = () => {
  React.useEffect(() => {
    const rootWrapper = document.querySelector('#wrapper');
    if (rootWrapper) rootWrapper.classList.add('ready');
    window.$(document).ready(() => {
      (function ($) {
        $('.photoset-grid').photosetGrid({
          // onComplete: () => {
          // }
        });
        if (window.mediumZoom) window.mediumZoom('img');
        // $('.photoset-grid img').on('click', ({ target }) => {
        //   const imgDOM = $(target)[0];
        //   const imgUrl = imgDOM.currentSrc;
        //   const title = imgDOM.alt || 'Perview';
        //   getImgWidth(imgUrl).then((offsetWidth) => {
        //     // const screenWidth = getScreenWidth();
        //     // let width = offsetWidth > screenWidth ? screenWidth : offsetWidth;
        //     // if (width > 800) width = 800;
        //     // ShowModal({
        //     //   title,
        //     //   width,
        //     //   needMinBtn: false,
        //     //   children: (
        //     //     <img src={imgUrl} alt="" />
        //     //   ),
        //     // });
        //   });
        // });
      }(window.jQuery));
    });
  }, []);
  return null;
};

export default Scripts;
