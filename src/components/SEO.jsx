import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Lokeshwar Reddy - Full-Stack Developer",
  description = "Full-Stack Developer specializing in React, Node.js, and AWS. Building scalable web applications with modern technologies.",
  keywords = "Full-Stack Developer, React, Node.js, JavaScript, AWS, PostgreSQL, Web Development, Software Engineer",
  image = "/images/profile.png",
  url = "https://lokeshwar-portfolio.vercel.app",
  type = "website"
}) => {
  const fullTitle = title.includes("Lokeshwar") ? title : `${title} | Lokeshwar Reddy`;
  const imageUrl = image.startsWith('http') ? image : `${url}${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Lokeshwar Reddy" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="theme-color" content="#3b82f6" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />
      <meta property="twitter:creator" content="@lokeshwar" />
      
      {/* Additional SEO */}
      <link rel="canonical" href={url} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="application-name" content="Lokeshwar Portfolio" />
      <meta name="apple-mobile-web-app-title" content="Lokeshwar Portfolio" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Structured Data - JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Lokeshwar Reddy",
          "jobTitle": "Full-Stack Developer",
          "description": description,
          "url": url,
          "image": imageUrl,
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
        })}
      </script>
    </Helmet>
  );
};

export default SEO;