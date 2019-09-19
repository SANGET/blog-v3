import React from 'react';
import { Link } from "gatsby";

const rootPath = `${__PATH_PREFIX__}/`;
const navConfig = [
  {
    title: '博客',
    path: '/',
    activeFilter: pathname => pathname === rootPath
  },
  {
    title: '关于',
    path: '/about',
  },
  {
    title: '标签',
    path: '/tags',
  },
];

const Header = (props) => {
  const { location, title } = props;
  const { pathname } = location;
  // const isInRoot = pathname === rootPath;
  let header = (
    <nav className="header-nav">
      <div className="logo">
        <Link
          to={`/`}>
          {title}
        </Link>
      </div>
      <span className="flex"></span>
      {
        navConfig.map((nav) => {
          const { title, path, activeFilter } = nav;
          const isActive = activeFilter ? activeFilter(pathname) : pathname === path;
          return (
            <Link
              key={path}
              className={`item${isActive ? ' active' : ''}`}
              to={path}>
              {title}
            </Link>
          );
        })
      }
      {/* <Link
        className={`item${isInRoot ? ' active' : ''}`}
        to={`/`}>
        博客
      </Link>
      <Link
        className={`item${pathname === '/about' ? ' active' : ''}`}
        to={`/about`}>
        关于
      </Link> */}
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
