import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container } from "@deer-ui/core/container";
import Link from "./link";

const rootPath = `${window.__PATH_PREFIX__ || ""}/`;

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
      {sideMenu.map((nav) => {
        const { title: subTitle, path, activeFilter } = nav;
        const isRoot = path === rootPath;
        // eslint-disable-next-line no-nested-ternary
        const isActive = isRoot
          ? pathname === path
          : activeFilter
          ? activeFilter(pathname)
          : pathname.indexOf(path) !== -1;
        return (
          <Link
            key={path}
            className={`item${isActive ? " active" : ""}`}
            to={path}
          >
            {subTitle}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      <span className="brand">{title}</span>
      <header className="no-print header">
        {header}
        {/* <Container>
      </Container> */}
      </header>
    </>
  );
};

export default Header;
