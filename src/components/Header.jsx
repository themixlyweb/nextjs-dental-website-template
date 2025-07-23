import React, { useRef } from 'react';
import Navbar from './Navbar';
import Topbar from './Topbar';
import useSticky from 'hooks/useSticky';

/**
 * Header component with sticky behavior.
 * Includes Topbar and Navbar with scroll-based stickiness.
 */
const Header = () => {
  const stickyRef = useRef(null);
  const isSticky = useSticky(350);

  return (
    <header
      ref={stickyRef}
      className={`sticky-wrapper${isSticky ? ' is-sticky' : ''}`}
    >
      <Topbar />
      <Navbar />
    </header>
  );
};

export default Header;
