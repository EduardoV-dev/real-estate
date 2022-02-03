import React from 'react';
import { Link } from 'gatsby';
import {
  Headline,
  List,
  Section,
  Select as SelComp,
  Item,
  Image,
  Wrapper,
  Title,
  Amount,
} from './styled';

const Select = () => (
  <SelComp>
    <option value="">Filter by</option>
  </SelComp>
);

const EstateItem = () => (
  <Item id="element">
    <Image src="https://placekitten.com/150" alt="" />
    <Wrapper>
      <Title>House by the lake</Title>
      <Amount>$ 100000</Amount>
      <div>
        <img src="https://placekitten.com/50" alt="" />
        <img src="https://placekitten.com/50" alt="" />
        <img src="https://placekitten.com/50" alt="" />
      </div>
      <Link to="/">Visit estate</Link>
    </Wrapper>
  </Item>
);

const Estates = () => (
  <Section>
    <Headline>Our Estates</Headline>
    <Select />
    <List>
      <EstateItem />
      <EstateItem />
      <EstateItem />
      <EstateItem />
      <EstateItem />
    </List>
  </Section>
);

export default Estates;
