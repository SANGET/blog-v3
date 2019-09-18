import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        2013 - 
        ©{new Date().getFullYear()}
        Sanget
      </div>
    </footer>
  );
};

export default Footer;
