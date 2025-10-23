export const site = {
  name: "Mile High Interface LLC",
  url: process.env['NEXT_PUBLIC_SITE_URL'] ?? "http://localhost:3000",
  description: "Professional app & website development for entrepreneurs, startups, and small businesses. Transform your ideas into reality with custom mobile apps and websites.",
  keywords: [
    "app development",
    "website development", 
    "mobile app development",
    "startup app development",
    "entrepreneur web design",
    "MVP development",
    "React development",
    "Next.js development",
    "Colorado app developer",
    "small business website",
    "custom software development",
    "Denver app development"
  ],
  author: "Mile High Interface LLC",
  location: {
    city: "Denver",
    state: "Colorado",
    country: "United States"
  }
};

export function generateStructuredData(pageType: 'home' | 'about' | 'services' | 'contact' | 'work' = 'home') {
  const baseData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": site.name,
    "url": site.url,
    "description": site.description,
    "logo": `${site.url}/brand/logo.png`,
    "sameAs": [
      "https://github.com/demaceo",
      "https://linkedin.com/in/demaceo"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": site.location.city,
      "addressRegion": site.location.state,
      "addressCountry": site.location.country
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "hello@milehighinterface.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "serviceType": [
      "Mobile App Development",
      "Website Development", 
      "MVP Development",
      "UI/UX Design",
      "Software Consulting"
    ]
  };

  if (pageType === 'services') {
    return {
      ...baseData,
      "@type": ["Organization", "LocalBusiness"],
      "priceRange": "$$",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile App Development",
              "description": "Custom mobile app development for iOS and Android"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Website Development",
              "description": "Professional website creation and optimization"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "MVP Development",
              "description": "Rapid minimum viable product development and validation"
            }
          }
        ]
      }
    };
  }

  return baseData;
}
