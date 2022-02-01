import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Hero, InfoSection } from '../components';

const query = graphql`
  query {
    image: file(relativePath: { eq: "hl1.jpg" }) {
      sharp: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const IndexPage = () => {
  const { image } = useStaticQuery(query);
  const data = {
    title: 'Home',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, odio nesciunt maxime rem ad iste exercitationem vitae sapiente architecto sed. Atque veniam libero excepturi accusantium eveniet deleniti animi minima explicabo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates facilis quod atque doloremque ullam ut aperiam voluptatibus architecto repudiandae expedita placeat in, necessitatibus fuga ipsum consequuntur odio deleniti? Impedit, vitae!',
  };

  return (
    <>
      <Hero
        title="Exclusive houses and departments on sale"
        fluid={image.sharp.fluid}
      />
      <div className="wrapper">
        <InfoSection data={data} />
      </div>
      <Hero title="" />
    </>
  );
};

export default IndexPage;
