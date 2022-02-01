import React from 'react';
import Header from '../header';

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

export default Layout;
