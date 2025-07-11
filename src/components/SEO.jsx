import { useEffect } from 'react';

const SEO = ({ title, description, keywords, author = "Lokeshwar Reddy" }) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = description;
      document.head.appendChild(newMetaDescription);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = keywords;
      document.head.appendChild(newMetaKeywords);
    }

    // Update meta author
    const metaAuthor = document.querySelector('meta[name="author"]');
    if (metaAuthor) {
      metaAuthor.setAttribute('content', author);
    } else {
      const newMetaAuthor = document.createElement('meta');
      newMetaAuthor.name = 'author';
      newMetaAuthor.content = author;
      document.head.appendChild(newMetaAuthor);
    }

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    } else {
      const newOgTitle = document.createElement('meta');
      newOgTitle.setAttribute('property', 'og:title');
      newOgTitle.content = title;
      document.head.appendChild(newOgTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    } else {
      const newOgDescription = document.createElement('meta');
      newOgDescription.setAttribute('property', 'og:description');
      newOgDescription.content = description;
      document.head.appendChild(newOgDescription);
    }

    // Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    } else {
      const newTwitterTitle = document.createElement('meta');
      newTwitterTitle.name = 'twitter:title';
      newTwitterTitle.content = title;
      document.head.appendChild(newTwitterTitle);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    } else {
      const newTwitterDescription = document.createElement('meta');
      newTwitterDescription.name = 'twitter:description';
      newTwitterDescription.content = description;
      document.head.appendChild(newTwitterDescription);
    }
  }, [title, description, keywords, author]);

  return null; // This component doesn't render anything
};

export default SEO;