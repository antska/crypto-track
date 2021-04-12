import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getLastUpdated } from 'store/markets/selectors';
import { getTheme } from 'store/global/selectors';
import { SH1, SNavigation, SSpan, SWrapper } from './styled';

const TableHeader = ({ page }: { page: number }) => {
  const lastUpdated = useSelector(getLastUpdated());
  const theme = useSelector(getTheme());

  return (
    <SWrapper>
      <div>
        <SH1>Cryptocurrencies</SH1>
        <SSpan>Last updated: {lastUpdated}</SSpan>
      </div>
      <SNavigation>
        {page < 2 ? (
          <Link
            data-test="disabled-back-btn"
            to="/"
            style={{
              backgroundColor: theme === 'light' ? '#DCDCDD' : '#656567',
              pointerEvents: 'none',
              color: 'gray',
            }}
          >
            <IoIosArrowBack size="1.5em" />
          </Link>
        ) : (
          <Link to={`/markets/${page - 1}`}>
            <IoIosArrowBack data-test="back-btn" size="1.5em" />
          </Link>
        )}
        <Link to={`/markets/${page + 1}`}>
          <IoIosArrowForward data-test="forward-btn" size="1.5em" />
        </Link>
      </SNavigation>
    </SWrapper>
  );
};

export default TableHeader;
