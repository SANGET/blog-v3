import React from 'react';

const Footer = ({ title }) => {
  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()} {title}, build with 
        <a href="https://www.gatsbyjs.org/" rel="nofollow" className="ms5" target="_blank">Gatsby</a>
      </div>
    </footer>
  );
};

export default Footer;
