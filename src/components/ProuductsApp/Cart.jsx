import s from './Products.module.css'
import Button from './../Button/Button'
export const Cart = ({ cart, handleDeleteFromCart, increaseQty, decreaseQty }) => {
	const total = cart.reduce((total, item) => total + item.price * item.quantity, 0)
	return (
		<div className={s.cart}>
			<h1>Cart</h1>
			<h2>Total amount: {total}$</h2>
			<ul>
				{cart.map(item => (
					<li key={item.id}>
						<img src={item.thumbnail} width={150} alt={item.title} />
						<p>{item.title}</p>
						<div>
							<Button onClick={() => decreaseQty(item)}>-</Button>
							<span>{item.quantity}</span>
							<Button onClick={() => increaseQty(item)}>+</Button>
						</div>
						<p>{item.price}$</p>
						<Button onClick={() => handleDeleteFromCart(item.id)}>Delete</Button>
					</li>
				))}
			</ul>
		</div>
	)
}
