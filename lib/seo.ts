export const site = {
  name: "Mile High Interface LLC",
  url: process.env['NEXT_PUBLIC_SITE_URL'] ?? "http://localhost:3000",
  description: "Transform your startup idea into reality with expert app & website development. We help entrepreneurs, investors, and small businesses build MVPs, scale products, and drive growth through custom digital solutions.",
  keywords: [
    // Primary business intent keywords
    "startup app development",
    "MVP development service",
    "entrepreneur app developer",
    "business website development",
    "investor-ready app development",
    "small business digital transformation",
    
    // Problem-solving keywords
    "build mobile app for startup",
    "validate business idea with MVP",
    "scale startup with technology",
    "custom app development for entrepreneurs",
    "professional business website design",
    
    // Technical expertise keywords
    "React app development",
    "Next.js website development",
    "mobile app development service",
    "full-stack development",
    "UI/UX design for startups",
    "data visualization development",
    
    // Location-based keywords
    "Colorado startup development",
    "Denver app developer for entrepreneurs",
    "Mountain West tech development",
    "remote app development service",
    
    // Client-specific keywords
    "tech co-founder alternative",
    "CTO-level development service",
    "rapid prototyping service",
    "business automation solutions",
    "portfolio company development support"
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
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "name": site.name,
    "alternateName": "Mile High Interface",
    "url": site.url,
    "description": site.description,
    "logo": `${site.url}/brand/logo.png`,
    "image": `${site.url}/brand/logo.png`,
    "foundingDate": "2020",
    "founders": [{
      "@type": "Person",
      "name": "Demaceo Vincent",
      "jobTitle": "Founder & Lead Developer",
      "sameAs": [
        "https://github.com/demaceo",
        "https://linkedin.com/in/demaceo"
      ]
    }],
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
    "contactPoint": [{
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "hello@milehighinterface.com",
      "availableLanguage": "English",
      "areaServed": "US"
    }, {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "hello@milehighinterface.com",
      "availableLanguage": "English"
    }],
    "areaServed": [{
      "@type": "Country",
      "name": "United States"
    }, {
      "@type": "State",
      "name": "Colorado"
    }],
    "serviceType": [
      "Startup MVP Development",
      "Mobile App Development for Entrepreneurs", 
      "Business Website Development",
      "Data Visualization & Analytics",
      "Technical Co-founder Services",
      "Product Validation & Testing",
      "UI/UX Design for Startups",
      "Business Process Automation",
      "Investor-Ready Prototyping"
    ],
    "priceRange": "$$-$$$",
    "paymentAccepted": ["Cash", "Credit Card", "Invoice"],
    "currenciesAccepted": "USD",
    "openingHours": "Mo-Fr 09:00-17:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50+",
      "bestRating": "5"
    },
    "knowsAbout": [
      "React Development",
      "Next.js Development", 
      "Mobile App Development",
      "Startup Strategy",
      "MVP Development",
      "UI/UX Design",
      "Data Visualization",
      "Business Automation"
    ]
  };

  // Page-specific enhancements
  if (pageType === 'services') {
    return {
      ...baseData,
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Professional Development Services for Entrepreneurs",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Startup MVP Development",
              "description": "Rapid minimum viable product development to validate your business idea and attract investors. Perfect for entrepreneurs who need to test market demand quickly.",
              "provider": {
                "@type": "Organization",
                "name": site.name
              },
              "areaServed": "United States",
              "availableChannel": {
                "@type": "ServiceChannel",
                "serviceType": "Remote Development Service"
              }
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Business Website Development",
              "description": "Professional websites that establish credibility, generate leads, and grow your business. Optimized for conversions and search engine visibility.",
              "provider": {
                "@type": "Organization", 
                "name": site.name
              },
              "areaServed": "United States"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Mobile App Development for Entrepreneurs",
              "description": "Custom mobile apps that scale with your business. From concept to App Store, we handle the entire development process for startups and growing companies.",
              "provider": {
                "@type": "Organization",
                "name": site.name
              },
              "areaServed": "United States"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Data Visualization & Analytics",
              "description": "Interactive dashboards and compelling data visualizations that help you make informed business decisions and present insights to stakeholders.",
              "provider": {
                "@type": "Organization",
                "name": site.name
              },
              "areaServed": "United States"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical Co-founder Services",
              "description": "Acting as your technical partner to build, scale, and optimize your product. Perfect for non-technical founders who need experienced development leadership.",
              "provider": {
                "@type": "Organization",
                "name": site.name
              },
              "areaServed": "United States"
            }
          }
        ]
      }
    };
  }

  if (pageType === 'home') {
    return [
      baseData,
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does it take to develop an MVP?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most MVPs can be developed in 4-8 weeks, depending on complexity. We focus on rapid development to help you validate your business idea quickly and start attracting investors or customers."
            }
          },
          {
            "@type": "Question", 
            "name": "Do you work with non-technical founders?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely! We specialize in working with entrepreneurs who have great business ideas but need technical expertise to bring them to life. We act as your technical co-founder and guide you through the entire development process."
            }
          },
          {
            "@type": "Question",
            "name": "What makes your app development different?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We focus specifically on startups and entrepreneurs, understanding the unique challenges of building investor-ready products, validating market demand, and scaling quickly. Our approach combines rapid development with business strategy."
            }
          }
        ]
      }
    ];
  }

  return baseData;
}

// Generate client-focused meta descriptions
export function generateMetaDescription(pageType: 'home' | 'about' | 'services' | 'contact' | 'work' = 'home'): string {
  const descriptions = {
    home: "Transform your startup idea into reality. Expert app & website development for entrepreneurs, investors, and small businesses. MVP development, scaling solutions, and technical co-founder services.",
    about: "Meet the team behind Mile High Interface. Experienced developers specializing in startup MVPs, entrepreneur support, and business-focused digital solutions. Based in Colorado, serving nationwide.",
    services: "Professional development services for startups: MVP development, mobile apps, business websites, data visualization, and technical co-founder support. Get investor-ready products fast.",
    contact: "Ready to build your startup's digital solution? Contact Mile High Interface for expert app development, MVP creation, and technical partnership. Free consultation available.",
    work: "See how we've helped entrepreneurs and startups build successful apps and websites. Case studies of MVP development, business growth, and technical innovation."
  };
  
  return descriptions[pageType];
}

// Generate page-specific keywords
export function generatePageKeywords(pageType: 'home' | 'about' | 'services' | 'contact' | 'work' = 'home'): string[] {
  const pageKeywords = {
    home: [
      "startup app development",
      "entrepreneur technical co-founder", 
      "MVP development service",
      "business idea validation",
      "investor-ready app development"
    ],
    about: [
      "Mile High Interface team",
      "Colorado app developers",
      "startup development experts",
      "entrepreneur technical support"
    ],
    services: [
      "MVP development pricing",
      "startup app development cost", 
      "business website development service",
      "technical co-founder hire",
      "app development for entrepreneurs"
    ],
    contact: [
      "startup development consultation",
      "app development quote",
      "MVP development contact",
      "entrepreneur technical partner"
    ],
    work: [
      "startup app case studies",
      "MVP development examples",
      "entrepreneur success stories",
      "business app portfolio"
    ]
  };
  
  return [...site.keywords, ...pageKeywords[pageType]];
}
