import React from 'react';
import { Helmet } from 'react-helmet';

const defaultDescription =
  'Crypto Track platform to track the top cryptocurrencies based on coingecko API.';

const SEO = ({
  description = defaultDescription,
  defaultAuthor = 'author',
  lang = 'en',
  meta = [],
  title = 'Crypto Track',
  keywords = ['crypto', 'track', 'cryptocurrencies', 'coins'],
}) => {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: defaultAuthor,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description,
        },
      ]
        .concat({
          name: 'keywords',
          content: keywords.join(', '),
        })
        .concat(meta)}
    />
  );
};

export default SEO;
