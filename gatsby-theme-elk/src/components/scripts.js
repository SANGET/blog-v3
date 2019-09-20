import React from 'react';
import ReactDOM from 'react-dom';

const Scripts = ({ resources }) => {
  React.useEffect(() => {
    const isMobile = /iPhone|Android|iOS/.test(navigator.userAgent);
    const wrapperDOM = document.querySelector('#wrapper');
    wrapperDOM.classList.add((isMobile ? 'mobile' : 'desktop'), 'ready');
  }, []);
  // return ReactDOM.createPortal(
  //   (
  //     <>
  //       <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"></link>
  //       {resources}
  //     </>
  //   ),
  //   document.body
  // );
  return null;
};

export default Scripts;
