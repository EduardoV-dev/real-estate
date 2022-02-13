import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { EstateInfo } from '../../components';
import { Amount, Section, Headline } from '../../components/estates/styled';
import { AgentContainer, Container, Image } from './styled';
import formatCurrency from '../../utils';

const RealEstate = ({ data }) => {
  const { name, image, price, items, agent } = data.info.nodes[0];
  const { name: agentName, email, telephone } = agent;

  return (
    <Section>
      <Headline>{name}</Headline>
      <Container>
        <Image image={getImage(image)} alt="" />
        <div>
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
