import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';

export const Section = styled.div`
  margin: 1rem 0;
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Container = styled.div`
  @media screen and (min-width: 576px) {
    display: grid;
    grid-template-columns: ${({ imgExists }) =>
      imgExists ? '1fr 1fr' : '1fr'};
    column-gap: 1rem;
  }
`;

export const Image = styled(GatsbyImage)`
  border-radius: 5px;
  margin-bottom: 1rem;
  border: ${props => `1px solid ${props.theme.colors.white}`};
  box-shadow: ${props => `0 0 2px 2px ${props.theme.colors.white}`};
`;

export const Paragraph = styled.p`
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.dark};
`;
