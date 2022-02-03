import styled from '@emotion/styled';

/* SELECT */

export const Select = styled.select`
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
`;

/* ESTATEITEM */

export const Item = styled.div`
  width: 100%;
  max-width: 300px;
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  box-shadow: ${({ theme }) => `1px 1px 2px 0px ${theme.colors.gray}`};
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const Title = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Amount = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
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

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;
