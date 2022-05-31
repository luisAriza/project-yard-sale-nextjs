import React from 'react';
import Image from 'next/image';
import bike from '@images/pexels-photo-276517 (mobile).jpeg';
import styles from '@styles/OrderProductItem.module.scss';

function OrderItem() {
  return (
    <div className={styles['order-item']}>
      <figure className={styles['order-item__product-image']}>
        <Image src={bike} alt="bike" />
      </figure>
      <p className={styles['order-item__title']}>Bike</p>
      <p className={styles['order-item__price']}>$ 30,00</p>
    </div>
  );
}

export default OrderItem;
