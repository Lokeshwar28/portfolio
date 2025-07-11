import { useEffect } from 'react';

const SEO = ({
  title = "Lokeshwar Reddy - Full-Stack Developer",
  description = "Full-Stack Developer specializing in React, Node.js, and AWS. Building scalable web applications with modern technologies.",
  keywords = "Full-Stack Developer, React, Node.js, JavaScript, AWS, PostgreSQL, Web Development, Software Engineer",
  image = "/images/profile.png",
  url = "https://lokeshwar-portfolio.vercel.app",
  type = "website"
}) => {
  useEffect(() => {
    const fullTitle = title.includes("Lokeshwar") ? title : `${title} | Lokeshwar Reddy`;
    document.title = fullTitle;

    // Helper to add/update meta tag
    function upsertMeta(name, content, property = false) {
      let meta = document.querySelector(property ? `meta[property="${name}"]` : `meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        property ? meta.setAttribute('property', name) : meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    }

    upsertMeta('description', description);
    upsertMeta('keywords', keywords);
    upsertMeta('author', 'Lokeshwar Reddy');
    upsertMeta('viewport', 'width=device-width, initial-scale=1.0');
    upsertMeta('robots', 'index, follow');
    upsertMeta('language', 'English');
    upsertMeta('theme-color', '#3b82f6');

    // Open Graph
    upsertMeta('og:type', type, true);
    upsertMeta('og:url', url, true);
    upsertMeta('og:title', fullTitle, true);
    upsertMeta('og:description', description, true);
    upsertMeta('og:image', image.startsWith('http') ? image : `${url}${image}`, true);
    upsertMeta('og:image:width', '1200', true);
    upsertMeta('og:image:height', '630', true);
    upsertMeta('og:locale', 'en_US', true);

    // Twitter
    upsertMeta('twitter:card', 'summary_large_image', true);
    upsertMeta('twitter:url', url, true);
    upsertMeta('twitter:title', fullTitle, true);
    upsertMeta('twitter:description', description, true);
    upsertMeta('twitter:image', image.startsWith('http') ? image : `${url}${image}`, true);
    upsertMeta('twitter:creator', '@lokeshwar', true);

    // Canonical link
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);

    // Application meta
    upsertMeta('format-detection', 'telephone=no');
    upsertMeta('application-name', 'Lokeshwar Portfolio');
    upsertMeta('apple-mobile-web-app-title', 'Lokeshwar Portfolio');
    upsertMeta('apple-mobile-web-app-capable', 'yes');
    upsertMeta('apple-mobile-web-app-status-bar-style', 'default');

    // Structured Data (JSON-LD)
    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Lokeshwar Reddy",
      "jobTitle": "Full-Stack Developer",
      "description": description,
      "url": url,
      "image": image.startsWith('http') ? image : `${url}${image}`,
      "sameAs": [
        "https://github.com/Lokeshwar28",
        "https://www.linkedin.com/in/lokesh-reddy-g/"
      ],
      "knowsAbout": [
        "React.js",
        "Node.js", 
        "JavaScript",
        "PostgreSQL",
        "AWS",
        "Full-Stack Development",
        "Web Development"
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Texas Tech University"
      }
    });
  }, [title, description, keywords, image, url, type]);

  return null; // No UI needed, just updates <head>
};

export default SEO;
