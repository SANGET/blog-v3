import React from "react";

import Footer from './footer';
import Header from './header';

class Layout extends React.Component {
  render() {
    const { children, ...other } = this.props;
    return (
      <div className="main-container">
        <Header {...other} />
        <main className="container">{children}</main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
