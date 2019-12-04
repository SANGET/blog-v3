import React from 'react';

import { Container } from '@deer-ui/core/container';
import Footer from './footer';
import Header from './header';
import Scripts from './scripts';

class Layout extends React.Component {
  render() {
    const { children, ...other } = this.props;
    return (
      <div id="wrapper" className={'wrapper'}>
        <Header {...other} />
        <Container className="main">{children}</Container>
        <Footer {...other} />
        <Scripts />
      </div>
    );
  }
}

export default Layout;
