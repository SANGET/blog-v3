import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Link from './link';

const rootPath = `${__PATH_PREFIX__}/`;

const Header = (props) => {
  const siteData = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          author
          title
          sideMenu {
            title
            path
          }
        }
      }
    }
  `);
  const defaultSiteTitle = siteData.site.siteMetadata.title;
  const { sideMenu } = siteData.site.siteMetadata;
  const { location, title = defaultSiteTitle } = props;
  const { pathname } = location;
  const header = (
    <nav className="header-nav">
      {
        sideMenu.map((nav) => {
          const { title: subTitle, path, activeFilter } = nav;
          const isActive = activeFilter ? activeFilter(pathname) : pathname === path;
          return (
            <Link
              key={path}
              className={`item${isActive ? ' active' : ''}`}
              to={path}>
              {subTitle}
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
