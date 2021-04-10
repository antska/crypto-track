import React from 'react';
import { useSelector } from 'react-redux';
import { FaGithub, FaHome, FaReddit, MdForum } from 'react-icons/all';

import { getCoinDetails } from 'store/coin/selectors';
import PercentageField from 'components/PercentageField';
import {
  SContainer,
  SPriceContainer,
  SSocial,
  STitleContainer,
  SLink,
} from './styled';

const DetailsHeader = () => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { name, image, symbol, market_data, links } =
    useSelector(getCoinDetails()) || {};

  const linksArray = [
    {
      name: 'Homepage',
      icon: <FaHome size="1.5em" />,
      link: links?.homepage[0],
    },
    {
      name: 'Github',
      icon: <FaGithub size="1.5em" />,
      link: links?.repos_url.github[0],
    },
    {
      name: 'Reddit',
      icon: <FaReddit size="1.5em" />,
      link: links?.subreddit_url,
    },
    {
      name: 'Forum',
      icon: <MdForum size="1.5em" />,
      link: links?.official_forum_url[0],
    },
  ];

  return (
    <SContainer>
      <SPriceContainer>
        <STitleContainer>
          <img src={image?.small} alt={name} />
          <h1>{name}</h1>
          <span>•</span>
          <h1>{symbol?.toUpperCase()}</h1>
        </STitleContainer>
        <STitleContainer>
          <h1>${market_data?.current_price.usd.toLocaleString()}</h1>
          {market_data?.price_change_percentage_24h && (
            <PercentageField perc={market_data?.price_change_percentage_24h} />
          )}
        </STitleContainer>
      </SPriceContainer>
      <SSocial>
        {linksArray.map(
          (linkObj) =>
            linkObj.link && (
              <SLink href={linkObj.link}>
                {linkObj.icon}
                <span>{linkObj.name}</span>
              </SLink>
            ),
        )}
      </SSocial>
    </SContainer>
  );
};

export default DetailsHeader;
