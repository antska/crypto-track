import React, { useMemo } from 'react';
import { RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri';
import { VscDash } from 'react-icons/vsc';
import styled from 'styled-components';

interface Props {
  perc: number;
}

const SPercentField = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  line-height: 1;
`;

const SPercValue = styled.div<{ color: string }>`
  color: ${({ color }) => color};
`;

const PercentageField = ({ perc }: Props) => {
  const getPercentage = (percVal: number) => {
    switch (true) {
      case percVal > 0:
        return {
          icon: <RiArrowUpSFill color="green" size="1.5em" />,
          color: 'green',
        };
      case percVal < 0:
        return {
          icon: <RiArrowDownSFill color="red" size="1.5em" />,
          color: 'red',
        };
      default:
        return { icon: <VscDash size="1.5em" />, color: '' };
    }
  };

  const percent = useMemo(() => getPercentage(perc), [perc]);
  const percentFixedValue = useMemo(() => perc.toFixed(2), [perc]);

  return (
    <SPercentField>
      {percent.icon}
      <SPercValue color={percent.color}>{percentFixedValue}%</SPercValue>
    </SPercentField>
  );
};

export default PercentageField;
