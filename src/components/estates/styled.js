import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link as GatsbyLink } from 'gatsby';

/* ESTATEITEM */

export const Item = styled.div`
  width: 100%;
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  box-shadow: ${({ theme }) => `1px 1px 2px 0px ${theme.colors.gray}`};
`;

export const Image = styled(GatsbyImage)`
  width: 100%;
  height: auto;
  min-height: 200px;
  max-height: 200px;
  object-fit: cover;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const Title = styled.h4`
  font-size: 1.2rem;
  min-height: 50px;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Category = styled.span`
  display: block;
  font-size: 0.9rem;
  font-weight: regular;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Amount = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
`;

export const Link = styled(GatsbyLink)`
  display: block;
  width: 100%;
  padding: 0.6rem 1rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  text-decoration: none;

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
    box-shadow: ${({ theme }) => `0 0 2px 2px ${theme.colors.primary}`};
  }
`;

/* ESTATES */

export const Section = styled.section`
  width: 100%;
  max-width: 850px;
  margin: 2rem auto;
`;

export const Headline = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Select = styled.select`
  display: block;
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 15rem), 1fr));
  gap: 1rem;
`;
