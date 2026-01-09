import { Helmet } from 'react-helmet-async';

export const StructuredDataAbout = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Archway Productions",
      "url": "https://thisisarchway.com",
      "foundingDate": "2024",
      "description": "Founded in 2024 by young entertainment industry professionals, Archway Productions is a project incubator and production company redefining how stories get made, from concept to screen.",
      "knowsAbout": [
        "Film Production",
        "Content Creation",
        "Digital Media",
        "Original Storytelling",
        "Gen Z Content"
      ],
      "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
      },
      "slogan": "The future is not franchised"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
