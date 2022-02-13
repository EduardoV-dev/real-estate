import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS } from '@contentful/rich-text-types';
import { Container, Image, Paragraph, Section, Title } from './styled';

const RENDER_OPTIONS = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
  },
};

const PageInfo = ({ data }) => {
  const { title, content, image } = data;
  const imgExists = image !== undefined;

  return (
    <Section>
      <Title>{title}</Title>
      <Container imgExists={imgExists}>
        {image && <Image image={getImage(image)} alt={title} />}
        {renderRichText(content, RENDER_OPTIONS)}
      </Container>
    </Section>
  );
};
export default PageInfo;
