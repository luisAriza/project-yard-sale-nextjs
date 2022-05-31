import Head from 'next/head';
import React from 'react';
import OrderList from '@containers/OrderProductList';
import styles from '@styles/OrderProductList.module.scss';

function Order() {
  return (
    <>
      <Head>
        <title>Next Shop | Order</title>
      </Head>
      <main className={styles.order}>
        <OrderList />
      </main>
    </>
  );
}

export default Order;
