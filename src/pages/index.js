import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Estates, Hero, PageInfo, SEO } from '../components';
import { formatSEO } from '../utils';

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
  const seo = {
    title: findHero.nodes[0].title,
    description: findHero.nodes[0].subtitle,
    banner: '',
  };

  return (
    <>
      <Hero data={landingHero.nodes[0]} />
      <div className="wrapper">
        <PageInfo data={info.nodes[0]} />
      </div>
      <Hero data={findHero.nodes[0]} minHeight="250px" />
      <div className="wrapper">
        <Estates />
      </div>
      <SEO seo={formatSEO(seo)} />
    </>
  );
};

export default IndexPage;
