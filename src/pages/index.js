import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Hero, InfoSection } from '../components';

const query = graphql`
  query {
    landingHero: allContentfulHeroData(filter: { slug: { eq: "landing" } }) {
      nodes {
        title
        image {
          gatsbyImageData
        }
      }
    }
    findHero: allContentfulHeroData(filter: { slug: { eq: "find" } }) {
      nodes {
        title
        subtitle
        image {
          gatsbyImageData
        }
      }
    }
    info: allContentfulPageData(filter: { title: { eq: "Home" } }) {
      nodes {
        title
        content {
          raw
        }
      }
    }
  }
`;

const IndexPage = () => {
  const { landingHero, findHero, info } = useStaticQuery(query);

  return (
    <>
      <Hero data={landingHero.nodes[0]} />
      <div className="wrapper">
        <InfoSection data={info.nodes[0]} />
      </div>
      <Hero data={findHero.nodes[0]} minHeight="250px" />
    </>
  );
};

export default IndexPage;
