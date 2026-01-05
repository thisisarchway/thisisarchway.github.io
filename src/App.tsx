import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Investment from './pages/Investment';
import Collaborators from './pages/Collaborators';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import NotFound from './pages/NotFound';

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
        <div className="min-h-screen bg-black">
          <ScrollToTop />
          <Header />
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
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;