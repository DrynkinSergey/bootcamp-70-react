import { createContext } from 'react'
import { useState } from 'react'

export const PizzaContext = createContext()

export const PizzaProvider = ({ children }) => {
	const [pizzas, setPizzas] = useState([])
	const [cart, setCart] = useState([])

	const addToCart = pizza => {
		setCart([...cart, { ...pizza, quantity: 1 }])
	}

	const removeFromCart = pizza => {
		setCart(cart.filter(item => item.id !== pizza.id))
	}

	const increaseQuantity = pizza => {
		setCart(cart.map(item => (item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item)))
	}
	const decreaseQuantity = pizza => {
		setCart(cart.map(item => (item.id === pizza.id ? { ...item, quantity: item.quantity - 1 } : item)))
	}

	const cartTotal = () => {
		return cart.reduce((total, item) => total + item.price * item.quantity, 0)
	}

	const removeCart = () => {
		setCart([])
	}

	const value = {
		pizzas,
		setPizzas,
		cart,
		addToCart,
		removeFromCart,
		increaseQuantity,
		cartTotal,
		removeCart,
		decreaseQuantity,
	}
	return <PizzaContext.Provider value={value}>{children}</PizzaContext.Provider>
}
