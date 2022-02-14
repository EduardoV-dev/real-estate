import styled from '@emotion/styled';
import { Link as GatsbyLink } from 'gatsby';

export const Header = styled.header`
  position: sticky;
  z-index: 10;
  top: 0;
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
  position: relative;
  text-decoration: none;
  color: ${props => props.theme.colors.white};
  font-weight: bold;

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 0%;
    height: 3px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.white};
  }

  &:hover,
  &:focus {
    &::after {
      width: 100%;
    }
  }
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
