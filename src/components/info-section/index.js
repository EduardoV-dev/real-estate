import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { Container, Image, Paragraph, Section, Title } from './styled';

const InfoSection = ({ data }) => {
  const { title, description, img } = data;
  const imgExists = img !== undefined;

  return (
    <Section>
      <Title>{title}</Title>
      <Container imgExists={imgExists}>
        {img && <Image image={getImage(img)} alt={title} />}
        <Paragraph>{description}</Paragraph>
      </Container>
    </Section>
  );
};
export default InfoSection;
