import React, { useEffect, useState } from "react";

import { Container } from "@deer-ui/core/container";
import { graphql, useStaticQuery } from "gatsby";
import { Loading } from "@deer-ui/core/loading";
import { Icon } from "@deer-ui/core/icon";

import Footer from "./footer";
import Header from "./header";
import Scripts from "./scripts";
import { usePageLoading } from "./utils";
// import { setRequest } from '../blog-helper/api';

const Layout = (props) => {
  const { children, ...other } = props;
  // const loading = usePageLoading();
  const [showNav, setShowNav] = useState(true);
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
          className="handle-toggle-btn"
          onClick={(e) => {
            setShowNav(!showNav);
          }}
        >
          <Icon n="bars" />
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
          <div className="container xl auto">{children}</div>
        </div>
      </div>
      <Scripts />
    </div>
  );
};

export default Layout;
