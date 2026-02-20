/**
 * Helper functions for creating structured data schemas
 * Used with StructuredData component for SEO optimization
 *
 * @see https://schema.org/
 */

/**
 * Create a Person schema for JSON-LD
 * @param {Object} params - Person details
 * @returns {Object} JSON-LD Person schema
 */
export const createPersonSchema = ({
  name,
  jobTitle,
  email,
  url,
  location,
  image,
  sameAs = [],
  description,
}) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name,
  jobTitle,
  email,
  url,
  image,
  address: location
    ? {
        "@type": "PostalAddress",
        addressLocality: location,
        addressCountry: "US",
      }
    : undefined,
  sameAs, // Social media profiles
  description,
  knowsAbout: [
    "Software Engineering",
    "Full Stack Development",
    "Java",
    "Spring Boot",
    "React",
    "TypeScript",
    "Microservices",
    "Cloud Computing",
    "AWS",
  ],
});

/**
 * Create a WebSite schema for JSON-LD
 * @param {Object} params - Website details
 * @returns {Object} JSON-LD WebSite schema
 */
export const createWebSiteSchema = ({ name, url, description, author }) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name,
  url,
  description,
  author: {
    "@type": "Person",
    name: author,
  },
  inLanguage: "en-US",
});

/**
 * Create a ProfilePage schema for JSON-LD
 * @param {Object} params - Profile page details
 * @returns {Object} JSON-LD ProfilePage schema
 */
export const createProfilePageSchema = ({
  name,
  url,
  description,
  author,
}) => ({
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: author,
  },
  name,
  url,
  description,
});

/**
 * Create a BreadcrumbList schema for JSON-LD
 * @param {Array} items - Array of {name, url} objects
 * @returns {Object} JSON-LD BreadcrumbList schema
 */
export const createBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
