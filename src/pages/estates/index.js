import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { PageInfo, Estates as EstatesList } from '../../components';

const Estates = () => {
  const data = useStaticQuery(graphql`
    query {
      info: allContentfulPageData(filter: { title: { eq: "Estate" } }) {
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
      <EstatesList />
    </div>
  );
};

export default Estates;
