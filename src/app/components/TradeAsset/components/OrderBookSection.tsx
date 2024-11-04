import React from 'react';
import styled from '@emotion/styled';

import { OrderCreation } from './OrderCreation';
import { OrderBookComponent } from './OrderBookComponent';

const OrderBookSectionContainer = styled.section`
  display: flex;
  width: 100%;
  gap: 8px;
  justify-content: start;
  flex-wrap: wrap;
  margin: auto 0;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const OrderBookSection: React.FC = () => {
  return (
    <OrderBookSectionContainer>
      <OrderBookComponent />
      <OrderCreation />
    </OrderBookSectionContainer>
  );
};