import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';

export const Container = styled.div`
  position: relative;
  min-height: ${({ minHeight }) => minHeight || '450px'};
`;

export const BgImage = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 0 2rem;
  overflow: hidden;
  background-color: rgba(51, 51, 51, 0.3);
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  user-select: none;

  &:hover {
    h2 {
      transform: scale(1);
      animation: scaling 1s ease infinite alternate;

      @keyframes scaling {
        100% {
          transform: scale(1.1);
        }
      }
    }
  }
`;

export const Headline = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.light};
  font-weight: normal;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.light};
  margin-top: 1rem;
`;
