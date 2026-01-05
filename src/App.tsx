import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary';
import StructuredData from './components/StructuredData';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Investment = lazy(() => import('./pages/Investment'));
const Collaborators = lazy(() => import('./pages/Collaborators'));
const Contact = lazy(() => import('./pages/Contact'));
const Shop = lazy(() => import('./pages/Shop'));
const NotFound = lazy(() => import('./pages/NotFound'));

function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return null;
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Helmet>
          <title>Archway Productions - Building the Future of Storytelling</title>
          <meta name="description" content="Archway Productions is building the future of storytelling. We generate and nurture stories that feel both timely and timeless." />
          <link rel="canonical" href="https://thisisarchway.com" />
          <meta property="og:title" content="Archway Productions - Building the Future of Storytelling" />
          <meta property="og:description" content="We're retiring the reboots and making room for quality, original projects." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://thisisarchway.com" />
        </Helmet>
        <StructuredData />
        <div className="min-h-screen bg-black">
          <ScrollToTop />
          <Header />
          <Suspense fallback={
            <div className="min-h-screen bg-black flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-gray-700 border-t-white rounded-full animate-spin"></div>
                <div className="text-white text-lg font-light tracking-wide">Loading...</div>
              </div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/investment" element={<Investment />} />
              <Route path="/collaborators" element={<Collaborators />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;