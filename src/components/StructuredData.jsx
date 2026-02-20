import { useEffect } from "react";
import PropTypes from "prop-types";

/**
 * StructuredData component for adding JSON-LD structured data to pages
 * Improves SEO and enables rich snippets in search results
 *
 * @see https://schema.org/
 * @see https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
 *
 * Usage:
 * import { createPersonSchema } from '../utils/schemaHelpers';
 * const schema = createPersonSchema({...});
 * <StructuredData type="person" data={schema} />
 */
const StructuredData = ({ type, data }) => {
  useEffect(() => {
    // Remove any existing structured data script for this type
    const existingScript = document.querySelector(
      `script[type="application/ld+json"][data-schema="${type}"]`,
    );
    if (existingScript) {
      existingScript.remove();
    }

    // Create new structured data script
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-schema", type);
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      const scriptToRemove = document.querySelector(
        `script[type="application/ld+json"][data-schema="${type}"]`,
      );
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, data]);

  return null; // This component doesn't render anything visible
};

StructuredData.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default StructuredData;
