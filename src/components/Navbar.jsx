import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '@containers/Menu';
import AppContext from '@context/appContext';
import Checkout from '@containers/Checkout';
// import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Navbar.module.scss';

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [toggleCheckout, setToggleCheckout] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleToggleCheckout = () => {
    setToggleCheckout(!toggleCheckout);
  };

  return (
    <nav className={styles.navbar}>
      {/* <Image src={menu.src} alt="icono de hamburguesa del menu" className={styles['navbar__burger']} /> */}
      <div className={styles['navbar__left']}>
        <Link href="/" className={styles['navbar__logo']}>
          <Image src={logo} alt="logo" />
        </Link>
        <ul>
          <li>
            <Link href="#">All</Link>
          </li>
          <li>
            <Link href="#">Clothes</Link>
          </li>
          <li>
            <Link href="#">Electronics</Link>
          </li>
          <li>
            <Link href="#">Furniture</Link>
          </li>
          <li>
            <Link href="#">Toys</Link>
          </li>
          <li>
            <Link href="#">Others</Link>
          </li>
        </ul>
      </div>
      <div className={styles.navbar__right}>
        <ul>
          <li className={styles.navbar__email} onClick={handleToggle} onKeyPress={this?.handleKeyPress} role="presentation">
            lmanuel159@hotmail.com
            {/* <a href="/login">Sign in</a> */}
          </li>
          <li className={styles.navbar__shoppingCart} onClick={handleToggleCheckout} onKeyPress={this?.handleKeyPress} role="presentation">
            <Image src={shoppingCart} alt="Shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleCheckout && <Checkout />}
    </nav>
  );
}

export default Navbar;
