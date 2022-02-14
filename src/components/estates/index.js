import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Waypoint } from 'react-waypoint';
import { formatCurrency } from '../../utils';
import EstateInfo from '../estate-info';
import {
  Amount,
  Category,
  Headline,
  Image,
  Item,
  Link,
  List,
  Section,
  Select as SelComp,
  Title,
  Wrapper,
} from './styled';
import useEstates from './useEstates';

const EstateItem = ({ style, estate }) => {
  const { name, price, category, image, items, slug } = estate;

  return (
    <Item style={style}>
      <Image image={getImage(image)} alt="" />
      <Wrapper>
        <Title>{name}</Title>
        <Category>{category}</Category>
        <Amount>{formatCurrency(price)}</Amount>
        <EstateInfo items={items} />
        <Link to={`/estates/${name}+${slug}`}>Visit estate</Link>
      </Wrapper>
    </Item>
  );
};

const SELECT_OPTIONS = ['All', 'By the lake', 'Department', 'Deluxe'];

const Estates = () => {
  const { filteredData, trail, animate, handleOnChange, setAnimate } =
    useEstates();

  return (
    <Waypoint
      onEnter={() => setAnimate(true)}
      onLeave={() => setAnimate(false)}
    >
      <Section>
        <Headline className="animate__animated animate__fadeInDown">
          Our Estates
        </Headline>
        <SelComp
          className="animate__animated animate__fadeInDown animate__delay-1s"
          onChange={handleOnChange}
        >
          <option hidden>Filter by</option>
          {SELECT_OPTIONS.map(value => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </SelComp>
        <List>
          {animate &&
            trail.map((styles, idx) => (
              <EstateItem
                style={styles}
                key={filteredData[idx].slug}
                estate={filteredData[idx]}
              />
            ))}
        </List>
      </Section>
    </Waypoint>
  );
};

export default Estates;
