const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const realEstateTemplate = path.resolve('src/templates/real-estate/index.js');

  const realEstateData = await graphql(`
    query {
      info: allContentfulEstate {
        nodes {
          name
          slug
        }
      }
    }
  `);

  realEstateData.data.info.nodes.forEach(estate =>
    createPage({
      path: `/estates/${estate.name}+${estate.slug}`,
      component: realEstateTemplate,
      context: { slug: estate.slug },
    }),
  );
};
