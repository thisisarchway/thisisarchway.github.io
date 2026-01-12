import React, { ReactNode } from 'react';
import Contact from './Contact';
import Footer from './Footer';
import { ScrollProgress } from './ScrollProgress';
import { ScrollToTop } from './ScrollToTop';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      {children}
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;
