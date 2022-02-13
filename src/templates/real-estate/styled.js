import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';

export const Container = styled.div`
  @media screen and (min-width: 576px) {
    display: grid;
    grid-template-columns: 1fr 0.5fr;
    column-gap: 1rem;
  }
`;

export const Image = styled(GatsbyImage)`
  width: 100%;
  height: auto;
  min-height: 200px;
  object-fit: cover;
`;

export const AgentContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1.5rem;
  color: ${({ theme }) => theme.colors.light};
  box-shadow: ${props => `0 0 2px 2px ${props.theme.colors.white}`};

  h4 {
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
  }
`;
