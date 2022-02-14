import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { PageInfo, Estates as EstatesList, SEO } from '../../components';
import { formatSEO } from '../../utils';

const query = graphql`
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
`;

const Estates = () => {
  const { info } = useStaticQuery(query);
  const seo = {
    title: info.nodes[0].title,
    description: info.nodes[0].title,
    banner: '',
  };

  return (
    <>
      <div className="wrapper">
        <PageInfo data={info.nodes[0]} />
        <EstatesList />
      </div>
      <SEO seo={formatSEO(seo)} />
    </>
  );
};

export default Estates;
