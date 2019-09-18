import React from 'react';
import { Link } from "gatsby";

const Header = (props) => {
  const { location, title } = props;
  const rootPath = `${__PATH_PREFIX__}/`;
  const { pathname } = location;
  const isInRoot = pathname === rootPath;
  let header = (
    <nav className="header-nav">
      <div className="logo">
        <Link
          to={`/`}>
          {title}
        </Link>
      </div>
      <span className="flex"></span>
      <Link
        className={`item${isInRoot ? ' active' : ''}`}
        to={`/`}>
        博客
      </Link>
      <Link
        className={`item${pathname === '/about' ? ' active' : ''}`}
        to={`/about`}>
        关于
      </Link>
    </nav>
  );

  return (
    <header className="header">
      <div className="container">
        {header}
      </div>
    </header>
  );
};

export default Header;
