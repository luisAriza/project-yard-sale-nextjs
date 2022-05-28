import React, { useContext } from 'react'
import AppContext from "@context/appContext"
import ProductItem from "@components/CheckoutProductItem"
import arrow from "@icons/flechita.svg"
import styles from "@styles/Checkout.module.scss"

function Checkout() {
	const { state } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);

		return sum;
	};

	return (

	<aside className={styles.Checkout}>
		<div className="checkout__title">
			<img src={arrow} alt="Flechita" />
			<h3>Shopping cart</h3>
		</div>
		<div className="checkout__content">
			{state.cart.map((product, index) => (
				<ProductItem product={product} key={index} index={index}  />
			))}
		</div>
		<div className="checkout__total">
			<p>Total</p>
			<p>$ {sumTotal()}</p>
		</div>
		<button className="primary-button checkout__button">Checkout</button>
	</aside>

	)
}

export default Checkout