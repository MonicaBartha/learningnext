import React from 'react';
import Container from '@material-ui/core/Container';
import Header from '../Header/Header';
import PropTypes from 'prop-types';

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <Container data-testid="LayoutContainer" maxWidth="lg">
        {children}
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;