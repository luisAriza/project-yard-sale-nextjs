import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppContext from '@context/appContext';
import ProductItem from '@components/CheckoutProductItem';
import arrow from '@icons/flechita.svg';
import styles from '@styles/Checkout.module.scss';

function Checkout() {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);

    return sum;
  };

  return (
    <aside className={styles['checkout']}>
      <div className={styles['checkout__title']}>
        <Image src={arrow} alt="Flechita" />
        <h3>Shopping cart</h3>
      </div>
      <div className={styles['checkout__content']}>
        {state.cart.map((product, index) => (
          <ProductItem product={product} key={index} index={index} />
        ))}
      </div>
      <div className={styles['checkout__total']}>
        <p>Total</p>
        <p>$ {sumTotal()}</p>
      </div>
      <Link href="/order" className={(styles['primary-button'], styles.checkout__button)}>
        Checkout
      </Link>
    </aside>
  );
}

export default Checkout;
