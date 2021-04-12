import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiDollar, BiEuro } from 'react-icons/bi';

import { setCurrency, setTheme } from 'store/global/actions';
import { getCurrency, getTheme } from 'store/global/selectors';
import { SIconMoon, SIconSun, SLink, SNav, SRightMenu } from './styled';

const Header = () => {
  const dispatch = useDispatch();
  const currency = useSelector(getCurrency());
  const theme = useSelector(getTheme());

  const handleChangeCurrency = () => {
    dispatch(
      setCurrency(
        currency.name === 'usd'
          ? { name: 'eur', symbol: '€' }
          : { name: 'usd', symbol: '$' },
      ),
    );
  };

  const handleChangeTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <SNav>
      <SLink to="/">CryptoTrack</SLink>
      <SRightMenu data-test="right-menu">
        {currency.name === 'usd' ? (
          <BiDollar
            data-test="dollar-icon"
            size="1.5em"
            onClick={handleChangeCurrency}
          />
        ) : (
          <BiEuro
            data-test="euro-icon"
            size="1.5em"
            onClick={handleChangeCurrency}
          />
        )}
        {theme === 'light' ? (
          <SIconSun
            data-test="sun-icon"
            size="1.5em"
            onClick={handleChangeTheme}
          />
        ) : (
          <SIconMoon
            data-test="moon-icon"
            size="1.5em"
            onClick={handleChangeTheme}
          />
        )}
      </SRightMenu>
    </SNav>
  );
};

export default Header;
