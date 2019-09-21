import React from 'react';

const Scripts = ({ resources }) => {
  React.useEffect(() => {
    const isMobile = /iPhone|Android|iOS/.test(navigator.userAgent);
    const wrapperDOM = document.querySelector('#wrapper');
    wrapperDOM.classList.add((isMobile ? 'mobile' : 'desktop'), 'ready');

    window.$(document).ready(function() {
      (function ($) {
        $('.photoset-grid').photosetGrid({
        });
      })(window.jQuery);
    });
  }, []);
  return null;
};

export default Scripts;
