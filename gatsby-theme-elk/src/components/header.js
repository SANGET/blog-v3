import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Link from './link';

const rootPath = `${__PATH_PREFIX__}/`;
const navConfig = [
  {
    title: '归档',
    path: '/archive',
    // activeFilter: pathname => pathname === rootPath
  },
  {
    title: '标签',
    path: '/tags',
  },
  {
    title: '关于',
    path: '/about',
  },
];

const Header = (props) => {
  const siteData = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `);
  const defaultSiteTitle = siteData.site.siteMetadata.title;
  const { location, title = defaultSiteTitle } = props;
  const { pathname } = location;
  const isInRoot = pathname === rootPath;
  let header = (
    <nav className="header-nav">
      {/* <div className="logo"> */}
      <Link
        className={`item${isInRoot ? ' active' : ''}`}
        to={`/`}>
          博客
      </Link>
      {/* </div> */}
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
