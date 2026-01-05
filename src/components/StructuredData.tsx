import React from 'react';
import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Archway Productions",
    "url": "https://thisisarchway.com",
    "logo": "https://thisisarchway.com/logo.jpg",
    "description": "Archway Productions is a project incubator and production company redefining how stories get made, from concept to screen. We develop, fund, and produce original stories from the next wave of creators.",
    "foundingDate": "2024",
    "email": "contact@thisisarchway.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New York City",
      "addressRegion": "NY",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://instagram.com/thisisarchway"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@thisisarchway.com",
      "contactType": "Customer Service"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
