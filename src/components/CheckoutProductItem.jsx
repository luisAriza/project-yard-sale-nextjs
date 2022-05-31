import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/appContext';
import close from '@icons/icon_close.png';
import styles from '@styles/OrderProductItem.module.scss';

function CheckoutItem({ product, index }) {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product, index);
  };

  return (
    <div className={styles['checkout__shopping-cart']}>
      <div className={styles['order-item']}>
        <figure className={styles['order-item__product-image']}>
          <Image src={product.images[0]} width="100%" height="100%" layout="responsive" alt={product.title} />
        </figure>
        <p className={styles['order-item__title']}>{product.title}</p>
        <p className={styles['order-item__price']}>$ {product.price}</p>
      </div>
      <Image src={close} alt="Eliminar producto" className={styles['checkout__icon-close']} onClick={() => handleRemove(product)} />
    </div>
  );
}

export default CheckoutItem;
