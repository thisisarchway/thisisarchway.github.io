import React, { ReactNode } from 'react';
import Contact from './Contact';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {children}
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;
