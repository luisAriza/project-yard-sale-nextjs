import React from 'react';
import Image from 'next/image';
import arrow from '@icons/flechita.svg';
import styles from '@styles/OrdersItem.module.scss';

function OrderItem() {
  return (
    <div className="orders-item">
      <p>
        <span className="orders-item__date">06.01.2022</span>
        <span className="orders-item__articles">6 articles</span>
      </p>
      <p className="orders-item__price">$ 180.00</p>
      <a href="/order">
        <Image src={arrow} alt="Icono >" className="orders-item__icon" />
      </a>
    </div>
  );
}

export default OrderItem;
