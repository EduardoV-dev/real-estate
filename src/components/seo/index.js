import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ seo }) => {
  const { title, description, banner } = seo;

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: banner,
        },
        {
          property: `twitter:image`,
          content: banner,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          property: `og:locale`,
          content: 'en',
        },
        {
          property: `og:site_name`,
          content: title,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]}
    />
  );
};

export default SEO;
