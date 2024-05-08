import { createContext, useState } from 'react'
import { toast } from 'react-toastify'

export const PizzaContext = createContext()

export const PizzaProvider = ({ children }) => {
	const [pizzas, setPizzas] = useState([])
	const [cart, setCart] = useState([])

	const addToCart = pizza => {
		setCart(prev => [...prev, { ...pizza, quantity: 1 }])
		toast.success('Товар додано в кошик!')
	}
	const deleteFromCart = pizza => {
		setCart(prev => prev.filter(item => item.id !== pizza.id))
		toast.info('Товар видалено з кошика!')
	}
	const totalSum = cart.reduce((total, item) => total + item.price * item.quantity, 0)

	const increaseQty = pizza => {
		if (pizza.quantity < 10) {
			setCart(prev => prev.map(item => (item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item)))
		}
	}
	const decreaseQty = pizza => {
		if (pizza.quantity > 1) {
			setCart(prev => prev.map(item => (item.id === pizza.id ? { ...item, quantity: item.quantity - 1 } : item)))
		}
	}

	const resetCart = () => {
		setCart([])
	}

	const contextValue = {
		pizzas,
		setPizzas,
		cart,
		addToCart,
		deleteFromCart,
		totalSum,
		increaseQty,
		decreaseQty,
		resetCart,
	}

	return <PizzaContext.Provider value={contextValue}>{children}</PizzaContext.Provider>
}
