import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
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
import EstateInfo from '../estate-info';
import formatCurrency from '../../utils';

const EstateItem = ({ estate }) => {
  const { name, price, category, image, items, slug } = estate;

  return (
    <Item id="element">
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
  const { info } = useStaticQuery(graphql`
    query {
      info: allContentfulEstate {
        nodes {
          name
          price
          category
          slug
          image {
            gatsbyImageData
          }
          items {
            wc
            rooms
            parking
          }
        }
      }
    }
  `);
  const [filterBy, setFilterBy] = useState('All');
  const [filteredData, setFilteredData] = useState(info.nodes);
  const handleOnChange = ({ target: { value } }) => setFilterBy(value);

  useEffect(() => {
    if (filterBy === 'All') return setFilteredData(info.nodes);
    const newFilteredData = info.nodes.filter(
      data => data.category === filterBy,
    );
    return setFilteredData(newFilteredData);
  }, [filterBy, info.nodes, setFilteredData]);

  return (
    <Section>
      <Headline>Our Estates</Headline>
      <SelComp onChange={handleOnChange}>
        <option hidden>Filter by</option>
        {SELECT_OPTIONS.map(value => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </SelComp>
      <List>
        {filteredData.map(estate => (
          <EstateItem key={estate.slug} estate={estate} />
        ))}
      </List>
    </Section>
  );
};

export default Estates;
