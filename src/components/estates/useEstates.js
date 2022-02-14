import { graphql, useStaticQuery } from 'gatsby';
import { useEffect, useState } from 'react';
import { useTrail } from 'react-spring';

const query = graphql`
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
`;

const useEstates = () => {
  const { info } = useStaticQuery(query);

  const [filterBy, setFilterBy] = useState('All');
  const [filteredData, setFilteredData] = useState(info.nodes);
  const [animate, setAnimate] = useState(false);
  const trail = useTrail(filteredData.length, {
    from: { opacity: 0, transform: 'scale(1.2) translateY(30%)' },
    to: { opacity: 1, transform: 'scale(1) translateY(0%)' },
    config: {
      duration: 100,
    },
    delay: 500,
    reset: true,
  });

  const handleOnChange = ({ target: { value } }) => setFilterBy(value);

  useEffect(() => {
    if (filterBy === 'All') return setFilteredData(info.nodes);
    const newFilteredData = info.nodes.filter(
      data => data.category === filterBy,
    );
    return setFilteredData(newFilteredData);
  }, [filterBy, info.nodes, setFilteredData]);

  return {
    filteredData,
    trail,
    animate,
    handleOnChange,
    setAnimate,
  };
};

export default useEstates;
