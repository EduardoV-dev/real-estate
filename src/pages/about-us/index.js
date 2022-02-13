import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { PageInfo } from '../../components';

const AboutUs = () => {
  const data = useStaticQuery(graphql`
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
  `);

  return (
    <div className="wrapper">
      <PageInfo data={data.info.nodes[0]} />;
    </div>
  );
};

export default AboutUs;
