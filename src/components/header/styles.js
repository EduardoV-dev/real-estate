import styled from '@emotion/styled';
import { Link as GatsbyLink } from 'gatsby';

/* Styled components */

export const Header = styled.header`
  background-color: ${props => props.theme.colors.secondary};
`;

export const Wrapper = styled.div`
  width: 95%;
  max-width: 75rem;
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1200px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const Headline = styled.h1`
  color: ${props => props.theme.colors.light};
  font-weight: normal;

  span {
    font-weight: bold;
  }
`;

export const Link = styled(GatsbyLink)`
  text-decoration: none;
  color: ${props => props.theme.colors.light};
  font-weight: bold;
`;

export const Nav = styled.nav`
  margin-top: 1rem;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }

  a {
    margin-right: 1.5rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;
