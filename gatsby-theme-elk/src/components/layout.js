import React from "react";

import Footer from './footer';
import Header from './header';
// import Scripts from './scripts';

class Layout extends React.Component {
  render() {
    const { children, loadResources, ...other } = this.props;
    return (
      <>
        <div id="wrapper" className={`wrapper`}>
          <Header {...other} />
          <main className="container main">{children}</main>
          <Footer {...other} />
        </div>
        {/* <Scripts resources={loadResources} /> */}
      </>
    );
  }
}

export default Layout;
