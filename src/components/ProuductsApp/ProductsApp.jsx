import { Header } from './Header'
import { List } from './List'
import productsData from '../../assets/products.json'
import { useEffect, useState } from 'react'
import { Cart } from './Cart'
const ProductsApp = () => {
	const [items] = useState(productsData)
	const [cart, setCart] = useState(() => {
		const savedCart = window.localStorage.getItem('cart')
		if (savedCart !== null) {
			return JSON.parse(savedCart)
		}
		return []
	})
	const [selectedTab, setSelectedTab] = useState('home')

	useEffect(() => {
		window.localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	const handleAddToCart = product => {
		const isExist = cart.some(item => item.id === product.id)
		if (isExist) {
			return increaseQty(product)
		}

		const modifiedProduct = {
			...product,
			quantity: 1,
		}
		setCart(prev => [...prev, modifiedProduct])
	}

	const handleDeleteFromCart = id => {
		setCart(prev => prev.filter(item => item.id !== id))
	}

	const increaseQty = product => {
		if (product.quantity === 99) return alert('Не так багато, друже!')
		setCart(prev => prev.map(item => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)))
	}

	const decreaseQty = product => {
		if (product.quantity === 1) {
			handleDeleteFromCart(product.id)
		}

		setCart(prev => prev.map(item => (item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item)))
	}

	return (
		<div>
			<Header changeTab={setSelectedTab} />
			{selectedTab === 'home' && <List items={items} onAddToCart={handleAddToCart} />}
			{selectedTab === 'cart' && (
				<Cart
					handleDeleteFromCart={handleDeleteFromCart}
					increaseQty={increaseQty}
					decreaseQty={decreaseQty}
					cart={cart}
				/>
			)}
		</div>
	)
}

export default ProductsApp
