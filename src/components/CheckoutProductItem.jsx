import React, { useContext } from 'react'
import AppContext from "@context/appContext"
import close from "@icons/icon_close.png"
import styles from "@styles/OrderProductItem.module.scss"

function CheckoutItem({ product, index }) {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = product => {
		removeFromCart(product, index);
	}

	return (

	<div className={styles.OrderProductItem}>
		<div className="order-item">
			<figure className='order-item__product-image'>
				<img src={product.images[0]} alt={product.title} />
			</figure>
				<p className='order-item__title'>{product.title}</p>
				<p className='order-item__price'>$ {product.price}</p>
		</div>
		<img src={close} alt="Eliminar producto" className='checkout__icon-close' onClick={() => handleRemove(product)} />
	</div>

	)
}

export default CheckoutItem