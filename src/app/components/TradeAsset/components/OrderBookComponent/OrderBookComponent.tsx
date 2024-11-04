import React from 'react';
import styles from './OrderBook.module.css';
import { OrderRow } from './OrderRow';
import { Header } from './Header';
import { Spread } from './Spread';
import { InputField } from './InputField';
import { ActionButtons } from './ActionButtons';

interface OrderData {
  amount: string;
  price: string;
  total: string;
  type: 'buy' | 'sell';
}

const buyOrders: OrderData[] = [
  { amount: '1.00', price: '12,293.01', total: '2.4663', type: 'buy' },
  { amount: '1.00', price: '12,293.01', total: '2.4663', type: 'buy' },
  { amount: '1.00', price: '12,293.01', total: '2.4663', type: 'buy' },
  { amount: '1.00', price: '12,293.01', total: '2.4663', type: 'buy' },
  { amount: '1.00', price: '12,293.01', total: '2.4663', type: 'buy' },
  { amount: '0.01', price: '12,293.01', total: '2.4663', type: 'buy' },
  { amount: '2.46', price: '12,293.01', total: '2.4663', type: 'buy' },
  { amount: '1.00', price: '12,293.01', total: '2.4663', type: 'buy' },
  { amount: '2.00', price: '12,293.01', total: '2.4663', type: 'buy' },
  { amount: '2.46', price: '12,293.01', total: '2.4663', type: 'buy' },
  { amount: '1.00', price: '12,293.01', total: '2.4663', type: 'buy' },
];

const sellOrders: OrderData[] = [
  { amount: '1.00', price: '12,293.01', total: '2.4663', type: 'sell' },
  { amount: '2.46', price: '12,293.01', total: '2.4663', type: 'sell' },
  { amount: '2.46', price: '12,293.01', total: '2.4663', type: 'sell' },
  { amount: '2.46', price: '12,293.01', total: '2.4663', type: 'sell' },
  { amount: '2.46', price: '12,293.01', total: '2.4663', type: 'sell' },
  { amount: '2.46', price: '12,293.01', total: '2.4663', type: 'sell' },
  { amount: '3.42', price: '12,293.01', total: '2.4663', type: 'sell' },
  { amount: '2.22', price: '12,293.01', total: '2.4663', type: 'sell' },
  { amount: '1.00', price: '12,293.01', total: '2.4663', type: 'sell' },
  { amount: '2.34', price: '12,293.01', total: '2.4663', type: 'sell' },
];

export const OrderBookComponent: React.FC = () => {
  return (
    <section className={styles.orderBookWrapper}>
      <div className={styles.orderBook}>
        <nav className={styles.segments}>
          <button className={styles.segmentActive}>order book</button>
          <button className={styles.segment}>Trades</button>
        </nav>
        <div className={styles.inputWrapper}>
          <InputField />
          <ActionButtons />
        </div>
        <div className={styles.orderList}>
          <Header />
          {buyOrders.map((order, index) => (
            <OrderRow key={`buy-${index}`} {...order} />
          ))}
          <Spread spread="7.6363" percentage="2.345" />
          {sellOrders.map((order, index) => (
            <OrderRow key={`sell-${index}`} {...order} />
          ))}
        </div>
      </div>
    </section>
  );
};