import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Link from './link';

const rootPath = `${__PATH_PREFIX__}/`;
const navConfig = [
  {
    title: 'Blog',
    path: '/',
    activeFilter: pathname => pathname === rootPath
  },
  {
    title: 'Archive',
    path: '/archive',
    // activeFilter: pathname => pathname === rootPath
  },
  {
    title: 'Tags',
    path: '/tags',
  },
  {
    title: 'About',
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
  let header = (
    <nav className="header-nav">
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
    <header className="no-print header">
      <div className="container">
        {header}
      </div>
    </header>
  );
};

export default Header;
