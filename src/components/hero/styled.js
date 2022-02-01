import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';

export const BgImage = styled(BackgroundImage)`
  position: relative;
  min-height: 450px;
`;

export const Container = styled.div`
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
  color: ${props => props.theme.colors.light};
  font-weight: normal;
`;
