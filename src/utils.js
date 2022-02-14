const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const formatCurrency = value => formatter.format(value);

export const formatSEO = seo => ({
  ...seo,
  title: `Real Estate | ${seo.title}`,
});
