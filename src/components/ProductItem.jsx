import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/appContext';
import addCart from '@icons/bt_add_to_cart.svg';
import addedCart from '@icons/bt_added_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const { state, addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };

  return (
    <div className={styles['product-item']}>
      <Image src={product.images[0]} width="100%" height="100%" layout="responsive" alt={product.title} className={styles['product-item__img']} />
      <div className={styles['product-item__info']}>
        <div>
          <p className={styles['product-item__price']}>${product.price}</p>
          <p className={styles['product-item__name']}>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)} className={styles['product-item__add-to-car']}>
          {state.cart.includes(product) ? <Image src={addedCart} alt="Icono de agregar al carrito" /> : <Image src={addCart} alt="Icono de agregar al carrito" />}
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
