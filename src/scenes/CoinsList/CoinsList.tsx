import React from 'react';
import { useHistory } from 'react-router';

import Layout from 'components/Layout';
import { SH1, SNumber, STable, STableWrapper } from './styled';

const headerNames = ['name', 'coin', 'price'];
const data: Record<string, string>[] = [
  { name: 'Enjin', coin: 'ENJ', price: '3' },
  { name: 'Bitcoin', coin: 'BTC', price: '40000' },
  { name: 'Cardano', coin: 'ADA', price: '2' },
];

const CoinsList = () => {
  const history = useHistory();

  const handleRowClick = (id: string) => {
    history.push(`coins/${id}`);
  };

  return (
    <Layout>
      <SH1>Cryptocurrencies </SH1>
      <STableWrapper>
        <STable>
          <thead>
            <tr>
              <th>#</th>
              {headerNames.map((name) => (
                <th key={name}>{name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.name} onClick={() => handleRowClick(item.name)}>
                <SNumber>{index + 1}</SNumber>
                {Object.keys(item).map((itemData) => (
                  <td>{item[itemData]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </STable>
      </STableWrapper>
    </Layout>
  );
};

export default CoinsList;
