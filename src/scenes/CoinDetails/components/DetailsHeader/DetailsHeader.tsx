import React from 'react';
import { useSelector } from 'react-redux';
import {
  FaGithub,
  FaHome,
  FaReddit,
  FaTelegram,
  FaTwitter,
} from 'react-icons/fa';
import { MdForum } from 'react-icons/md';

import { getCoinDetails } from 'store/coin/selectors';
import PercentageField from 'components/PercentageField';
import { Currency } from 'store/coin/types';
import { getCurrency } from 'store/global/selectors';
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
  const currency = useSelector(getCurrency());

  const linksArray = [
    {
      name: 'Homepage',
      icon: <FaHome size="1.5em" />,
      link: links?.homepage[0],
      dataTest: 'homepage-link',
    },
    {
      name: 'Github',
      icon: <FaGithub size="1.5em" />,
      link: links?.repos_url.github[0],
    },
    {
      name: 'Forum',
      icon: <MdForum size="1.5em" />,
      link: links?.official_forum_url[0],
    },
    {
      name: 'Reddit',
      icon: <FaReddit size="1.5em" />,
      link: links?.subreddit_url,
    },
    {
      name: 'Twitter',
      icon: <FaTwitter size="1.5em" />,
      link: links?.twitter_screen_name
        ? `https://twitter.com/${links?.twitter_screen_name}`
        : undefined,
      dataTest: 'twitter-link',
    },
    {
      name: 'Telegram',
      icon: <FaTelegram size="1.5em" />,
      link: links?.telegram_channel_identifier
        ? `https://t.me/${links?.telegram_channel_identifier}`
        : undefined,
      dataTest: 'telegram-link',
    },
  ];

  return (
    <SContainer>
      <SPriceContainer>
        <STitleContainer data-test="title-container">
          <img src={image?.small} alt={name} />
          <h1>{name}</h1>
          {symbol && <span>•</span>}
          <h1>{symbol?.toUpperCase()}</h1>
        </STitleContainer>
        <STitleContainer>
          {market_data?.current_price && (
            <h1>
              {currency.symbol}
              {(market_data?.current_price as Currency)[
                currency.name
              ].toLocaleString()}
            </h1>
          )}
          {market_data?.price_change_percentage_24h && (
            <PercentageField
              perc={market_data?.price_change_percentage_24h as number}
            />
          )}
        </STitleContainer>
      </SPriceContainer>
      <SSocial>
        {linksArray.map(
          (linkObj) =>
            linkObj.link && (
              <SLink
                data-test={linkObj.dataTest}
                key={linkObj.name}
                href={linkObj.link}
              >
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
