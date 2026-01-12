import { Helmet } from 'react-helmet-async';

export const StructuredDataProjects = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "CreativeWork",
        "position": 1,
        "name": "Vital",
        "description": "A disgruntled young professional seeks escapism from her mundane life through the influencers on her phone screen. When she befriends one of them, she must decide to continue as she is, or join the lifestyle of online stardom at a dubious cost.",
        "creator": {
          "@type": "Organization",
          "name": "Archway Productions"
        },
        "workType": "Pilot",
        "status": "In Development"
      },
      {
        "@type": "CreativeWork",
        "position": 2,
        "name": "Leaping",
        "description": "On the night of their shared leap year birthday, two lifelong friends are given the chance to become 17 again. But starting over in today's world forces them to choose between the lives they've built and the second chance they've always dreamed of.",
        "creator": {
          "@type": "Organization",
          "name": "Archway Productions"
        },
        "workType": "Feature",
        "status": "In Development"
      },
      {
        "@type": "CreativeWork",
        "position": 3,
        "name": "The Untitled Aubrey Plaza Devil Project",
        "description": "Down on her luck, Amalea Jane moved to Los Angeles to make it big in show-business. To her dismay, this sh*t is way harder than it looks, folks. At the edge of her sanity -and frankly on accident- she prays to the Devil who reveals itself in the form of her celebrity idol and crush: Aubrey Plaza.",
        "creator": {
          "@type": "Organization",
          "name": "Archway Productions"
        },
        "workType": "Feature",
        "status": "In Development"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
