import React from 'react';
import { BgImage, Container, Headline } from './styled';

const Hero = ({ title, subtitle, fluid }) => (
  <BgImage tag="section" fluid={fluid} fadeIn="soft">
    <Container>
      <Headline>{title}</Headline>
      {subtitle && <p>{subtitle}</p>}
    </Container>
  </BgImage>
);

export default Hero;
