import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { EstateInfo, SEO } from '../../components';
import { Amount, Section, Headline } from '../../components/estates/styled';
import { AgentContainer, Container, Image } from './styled';
import { formatCurrency, formatSEO } from '../../utils';

const RealEstate = ({ data }) => {
  const { name, image, price, items, agent } = data.info.nodes[0];
  const { name: agentName, email, telephone } = agent;
  const seo = {
    title: name,
    description: name,
    banner: '',
  };

  return (
    <>
      <Section>
        <Headline className="animate__animated animate__fadeInDown">
          {name}
        </Headline>
        <Container>
          <Image
            image={getImage(image)}
            alt=""
            className="animate__animated animate__fadeInLeft"
          />
          <div className="animate__animated animate__fadeInRight">
            <Amount>{formatCurrency(price)}</Amount>
            <EstateInfo items={items} />
            <AgentContainer>
              <h4>Seller Agent</h4>
              <p>{agentName}</p>
              <p>{email}</p>
              <p>{telephone}</p>
            </AgentContainer>
          </div>
        </Container>
      </Section>
      <SEO seo={formatSEO(seo)} />
    </>
  );
};

export default RealEstate;

export const query = graphql`
  query ($slug: String) {
    info: allContentfulEstate(filter: { slug: { eq: $slug } }) {
      nodes {
        name
        price
        category
        slug
        image {
          gatsbyImageData
        }
        items {
          wc
          rooms
          parking
        }
        agent {
          name
          email
          telephone
        }
      }
    }
  }
`;
