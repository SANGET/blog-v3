import React from 'react';
import ReactDOM from 'react-dom';

const Scripts = ({ resources }) => {
  return ReactDOM.createPortal(
    (
      <>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"></link>
        {resources}
      </>
    ),
    document.body
  );
};

export default Scripts;
