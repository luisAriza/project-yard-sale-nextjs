import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import arrow from '@icons/flechita.svg';
import styles from '@styles/OrdersItem.module.scss';

function OrderItem() {
  return (
    <div className={styles['orders-item']}>
      <p>
        <span className={styles['orders-item__date']}>06.01.2022</span>
        <span className={styles['orders-item__articles']}>6 articles</span>
      </p>
      <p className={styles['orders-item__price']}>$ 180.00</p>
      <Link href="/order">
        <Image src={arrow} alt="Icono >" className={styles['orders-item__icon']} />
      </Link>
    </div>
  );
}

export default OrderItem;
