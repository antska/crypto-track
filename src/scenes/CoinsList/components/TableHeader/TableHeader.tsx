import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getLastUpdated } from 'store/markets/selectors';
import { SH1, SNavigation, SSpan, SWrapper } from './styled';

const TableHeader = ({ page }: { page: number }) => {
  const lastUpdated = useSelector(getLastUpdated());

  return (
    <SWrapper>
      <div>
        <SH1>Cryptocurrencies</SH1>
        <SSpan>Last updated: {lastUpdated}</SSpan>
      </div>
      <SNavigation>
        {page < 2 ? (
          <Link
            to="/"
            style={{
              backgroundColor: '#DCDCDD',
              pointerEvents: 'none',
              color: 'gray',
            }}
          >
            <IoIosArrowBack size="1.5em" />
          </Link>
        ) : (
          <Link to={`/markets/${page - 1}`}>
            <IoIosArrowBack size="1.5em" />
          </Link>
        )}
        <Link to={`/markets/${page + 1}`}>
          <IoIosArrowForward size="1.5em" />
        </Link>
      </SNavigation>
    </SWrapper>
  );
};

export default TableHeader;
