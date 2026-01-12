import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout';

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <Helmet>
          <title>404 - Page Not Found | Archway Productions</title>
          <meta name="description" content="The page you're looking for doesn't exist." />
        </Helmet>
        <div className="text-center max-w-2xl">
          <h1 className="text-7xl md:text-9xl lg:text-[8rem] text-white mb-4 leading-[0.9] tracking-tight">
            404
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-4">
            Page Not Found
          </p>
          <p className="text-lg text-gray-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-block bg-white text-black px-8 py-3 font-medium hover:bg-gray-200 transition-colors duration-300 rounded-lg"
          >
            Return Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
