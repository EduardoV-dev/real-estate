import styled from '@emotion/styled';

/* ESTATE-INFO-ITEM */

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const Quantity = styled.span`
  margin-left: 0.5rem;
  user-select: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

/* ESTATE-INFO */

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;
