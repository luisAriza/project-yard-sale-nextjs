import React from 'react';
import OrderList from '@containers/OrderProductList';
import styles from '@styles/OrderProductList.module.scss';

function Order() {
  return (
    <main className={styles.order}>
      <OrderList />
    </main>
  );
}

export default Order;
