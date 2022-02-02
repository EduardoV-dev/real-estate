import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { BgImage, Container, Content, Headline, Paragraph } from './styled';

const Hero = ({ data, minHeight }) => {
  const { title, subtitle, image } = data;

  return (
    <Container minHeight={minHeight}>
      <BgImage image={getImage(image)} alt={title} />
      <Content>
        <Headline>{title}</Headline>
        {subtitle && <Paragraph>{subtitle}</Paragraph>}
      </Content>
    </Container>
  );
};

export default Hero;
