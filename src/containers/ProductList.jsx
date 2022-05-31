import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import styles from '@styles/ProductList.module.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

function ProductList() {
  const products = useGetProducts(API);

  return (
    <section className={styles['cards-container']}>
      {products.map((product) => {
        if (product.images.length > 0 && product.images[0] !== '') {
          return <ProductItem product={product} key={product.id} />;
        }
      })}
    </section>
  );
}

export default ProductList;
