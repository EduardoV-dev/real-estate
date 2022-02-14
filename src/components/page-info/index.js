import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS } from '@contentful/rich-text-types';
import { Container, Image, Paragraph, Section, Title } from './styled';

const RENDER_OPTIONS = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <Paragraph className="animate__animated animate__fadeInRight">
        {children}
      </Paragraph>
    ),
  },
};

const PageInfo = ({ data }) => {
  const { title, content, image } = data;
  const imgExists = image !== undefined;

  return (
    <Section>
      <Title className="animate__animated animate__fadeInDown">{title}</Title>
      <Container imgExists={imgExists}>
        {image && (
          <Image
            className="animate__animated animate__fadeInLeft"
            image={getImage(image)}
            alt={title}
          />
        )}
        {renderRichText(content, RENDER_OPTIONS)}
      </Container>
    </Section>
  );
};
export default PageInfo;
