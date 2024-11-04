import React from 'react';
import styled from '@emotion/styled';

const OrderCreationContainer = styled.div`
  border-radius: 16px;
  background-color: rgba(246, 246, 246, 1);
  align-self: stretch;
  display: flex;
  min-width: 240px;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  justify-content: start;
  width: 276px;
  margin: auto 0;
  padding: 8px;
  border: 1px solid rgba(177, 177, 177, 1);
`;

const OrderCreationContent = styled.div`
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
  align-self: stretch;
  display: flex;
  min-width: 200px;
  min-height: 540px;
  width: 260px;
  flex-direction: column;
  overflow: hidden;
  justify-content: start;
  max-width: 300px;
  margin: auto 0;
  padding: 12px 12px 96px;
  border: 1px solid rgba(240, 240, 240, 1);
`;

// Add more styled components for OrderCreation internals

export const OrderCreation: React.FC = () => {
  return (
    <OrderCreationContainer>
      <OrderCreationContent>
        {/* Add OrderCreation content */}
      </OrderCreationContent>
    </OrderCreationContainer>
  );
};