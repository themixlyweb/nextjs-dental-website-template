import React from 'react';
import Header from './Header';
import Footer from './Footer';

/**
 * Shared layout component for wrapping pages with header and footer.
 * @param {React.ReactNode} children - Page content.
 */
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main role="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
