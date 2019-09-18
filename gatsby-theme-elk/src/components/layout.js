import React from "react";

import Footer from './footer';
import Header from './header';
import Scripts from './scripts';

class Layout extends React.Component {
  render() {
    const { children, ...other } = this.props;
    return (
      <>
        <div className="wrapper">
          <Header {...other} />
          <main className="container main">{children}</main>
          <Footer {...other} />
        </div>
        {/* TODO: 把通用 scripts 放到最外层 */}
        <Scripts />
      </>
    );
  }
}

export default Layout;
