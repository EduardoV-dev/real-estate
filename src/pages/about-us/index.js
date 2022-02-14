import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { PageInfo, SEO } from '../../components';
import { formatSEO } from '../../utils';

const query = graphql`
  query {
    info: allContentfulPageData(filter: { title: { eq: "About Us" } }) {
      nodes {
        title
        content {
          raw
        }
        image {
          gatsbyImageData
        }
      }
    }
  }
`;

const AboutUs = () => {
  const { info } = useStaticQuery(query);
  const seo = {
    title: info.nodes[0].title,
    description: info.nodes[0].title,
    banner: '',
  };

  return (
    <>
      <div className="wrapper">
        <PageInfo data={info.nodes[0]} />;
      </div>
      <SEO seo={formatSEO(seo)} />
    </>
  );
};

export default AboutUs;
