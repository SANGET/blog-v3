import React from 'react';
import { ShowModal } from 'ukelli-ui/core/modal';
import { getScreenWidth } from 'ukelli-ui/core/utils/screen';

const getImgWidth = (url) => {
  return new Promise((resolve) => {
    var img = new Image();
    img.onload = function() {
      resolve(this.width);
    };
    img.src = url;
  });
};

const Scripts = () => {
  React.useEffect(() => {
    window.$(document).ready(function() {
      (function ($) {
        $('#wrapper').addClass('ready');
        $('.photoset-grid').photosetGrid({
          // onComplete: () => {
          // }
        });
        $('#wrapper img').on('click', function({ target }) {
          const imgDOM = $(target)[0];
          const imgUrl = imgDOM.currentSrc;
          const title = imgDOM.alt || 'Perview';
          getImgWidth(imgUrl).then((offsetWidth) => {
            const screenWidth = getScreenWidth();
            let width = offsetWidth > screenWidth ? screenWidth : offsetWidth;
            if(width > 600) width = 600;
            ShowModal({
              title,
              width,
              needMinBtn: false,
              children: (
                <img src={imgUrl} alt="" />
              )
            });
          });
        });
      })(window.jQuery);
    });
  }, []);
  return null;
};

export default Scripts;
