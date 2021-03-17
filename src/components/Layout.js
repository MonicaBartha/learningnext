import React from 'react';
import Container from '@material-ui/core/Container';
import Header from '../components/Header/Header';

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        {children}
      </Container>
    </>
  );
};

export default Layout;