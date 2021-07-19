import React, { useEffect, useState } from "react";

import { graphql, useStaticQuery } from "gatsby";
import UseAnimations from "react-useanimations";
import menu2 from "react-useanimations/lib/menu2";

import Footer from "./footer";
import Header from "./header";
import Scripts from "./scripts";
import { usePageLoading } from "./utils";
// import { setRequest } from '../blog-helper/api';

const Layout = (props) => {
  const siteData = useStaticQuery(graphql`
    query LayoutQuery {
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
  const { sideMenu } = siteData.site.siteMetadata;
  const { children, ...other } = props;
  const { location } = other;
  const { pathname } = location;
  // const loading = usePageLoading();
  const isInMenuPath = () => {
    let isMenuPath = false;
    sideMenu.map((nav) => {
      const { path, activeFilter } = nav;
      const isRoot = path === "/";
      // eslint-disable-next-line no-nested-ternary
      const isActive = isRoot
        ? pathname === path
        : activeFilter
        ? activeFilter(pathname)
        : pathname.indexOf(path) !== -1;
      if (isActive) {
        isMenuPath = true;
      }
    });
    return isMenuPath;
  };
  /** 如果当前路由在左侧菜单中，则默认现实，否则，默认隐藏 */
  const defaultShowMenu = isInMenuPath();
  const [showNav, setShowNav] = useState(defaultShowMenu);
  useEffect(() => {
    const rootWrapper = document.querySelector("#wrapper");
    if (rootWrapper) rootWrapper.classList.add("ready");

    const { matches } = window.matchMedia("(max-width: 960px)");
    if (matches) {
      setShowNav(false);
    }
  }, []);
  return (
    <div
      id="wrapper"
      className={`wrapper ${showNav ? "show-nav" : "hide-nav"}`}
    >
      <div className="main-container">
        <div
          className="handle-toggle-btn no-print"
          onClick={(e) => {
            setShowNav(!showNav);
          }}
          style={{ marginTop: -4 }}
        >
          <UseAnimations
            animationKey="menu2"
            reverse={showNav}
            animation={menu2}
            size={24}
            speed={showNav ? 1 : 2}
          />
        </div>
        <div className="left-nav no-print">
          <div className="left-nav-content">
            <Header {...other} />
            <Footer {...other} />
          </div>
        </div>
        {/* <div className="wrapper-loading-tip">
        <Loading inrow loading={loading} />
      </div> */}
        <div className="blog-content flex">
          <div className="container md auto">{children}</div>
        </div>
      </div>
      <Scripts />
    </div>
  );
};

export default Layout;
