import React from 'react'
import close from "@icons/icon_close.png"
import styles from "@styles/Menu.module.scss"

function Menu() {
	return (

	<section className={styles.Menu}>
		<img src={close} alt="icon de close" className='menu__icon-close' />
		<ul>
			<li>
				<a href="/">CATEGORIES</a>
			</li>
			<li>
				<a href="/">All</a>
			</li>
			<li>
				<a href="/">Clothes</a>
			</li>
			<li>
				<a href="/">Electronics</a>
			</li>
			<li>
				<a href="/">Furnitures</a>
			</li>
			<li>
				<a href="/">Toys</a>
			</li>
			<li>
				<a href="/">Others</a>
			</li>
		</ul>
		<ul>
			<li>
				<a href="/orders">My orders</a>
			</li>
			<li>
				<a href="/account">My account</a>
			</li>
		</ul>
		<a href="/login" className="menu__login">Log in</a>
	</section>

	)
}

export default Menu;