import React from 'react';
import OrderItem from '@components/OrderProductItem';
import styles from '@styles/OrderProductList.module.scss';

function OrderProductList() {
  return (
    <section className={styles['order-container']}>
      <h1 className={styles['order-container__title']}>My order</h1>
      <div className={styles['order-container__content']}>
        <div className={styles['order-container__info']}>
          <p>
            <span>06.01.2022</span>
            <span>6 articles</span>
          </p>
          <p>$ 180.00</p>
        </div>
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </div>
    </section>
  );
}

export default OrderProductList;
