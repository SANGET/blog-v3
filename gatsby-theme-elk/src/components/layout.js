import React from "react";

import Footer from './footer';
import Header from './header';
import Scripts from './scripts';

const isMobile = /iPhone|Android|iOS/.test(navigator.userAgent);

class Layout extends React.Component {
  render() {
    const { children, loadResources, ...other } = this.props;
    return (
      <>
        <div className={`wrapper ${isMobile ? 'mobile' : 'desktop'}`}>
          <Header {...other} />
          <main className="container main">{children}</main>
          <Footer {...other} />
        </div>
        <Scripts resources={loadResources} />
      </>
    );
  }
}

export default Layout;
