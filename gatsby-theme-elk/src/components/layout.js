import React from "react";

import Footer from './footer';
import Header from './header';

class Layout extends React.Component {
  render() {
    const { children, ...other } = this.props;
    return (
      <div className="wrapper">
        <Header {...other} />
        <main className="container main">{children}</main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
