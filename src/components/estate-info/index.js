import React from 'react';
import { Container, Icon, InfoItem, Quantity } from './styled';
import WCIcon from '../../svg/icono_wc.svg';
import ParkingIcon from '../../svg/icono_estacionamiento.svg';
import RoomsIcon from '../../svg/icono_dormitorio.svg';

const EstateInfoItem = ({ src, value }) => (
  <InfoItem>
    <Icon src={src} alt="" />
    <Quantity>{value}</Quantity>
  </InfoItem>
);

const EstateInfo = ({ items }) => {
  const { wc, rooms, parking } = items;

  return (
    <Container>
      <EstateInfoItem src={WCIcon} value={wc} />
      <EstateInfoItem src={ParkingIcon} value={rooms} />
      <EstateInfoItem src={RoomsIcon} value={parking} />
    </Container>
  );
};

export default EstateInfo;
