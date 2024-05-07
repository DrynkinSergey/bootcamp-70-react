import axios from 'axios'
import { useAuth, usePizzas, useRouter } from '../store/hooks'

export const Cart = () => {
	const { cart, removeFromCart, cartTotal, removeCart } = usePizzas()
	const { user } = useAuth()
	const { changePage } = useRouter()
	const order = () => {
		axios
			.post('http://localhost:7777/orders', {
				items: cart,
				total: cartTotal(),
				user,
			})
			.then(() => {
				removeCart()
				changePage('pizzas')
			})
	}
	return (
		<div>
			<h1 className='text-3xl font-bold text-center'>Кошик вартістю {cartTotal()} грн.</h1>
			<div className='grid grid-cols-3 gap-4 max-w-6xl mx-auto py-8 px-4'>
				{cart.map(item => (
					<div key={item.id} className='card card-compact  bg-base-100 shadow-xl'>
						<figure>
							<img className='w-full' src={item.img} alt={item.title} />
						</figure>
						<div className='card-body'>
							<h2 className='card-title font-bold'>{item.title}</h2>
							<p>Ціна: {item.price} грн.</p>
							<p>Вага: {item.weight}</p>
							<p>Розмір: {item.size}</p>
							<div className='card-actions justify-end'>
								<button onClick={() => removeFromCart(item)} className='btn btn-primary'>
									Видалити
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className='flex justify-center'>
				<button onClick={removeCart} className='btn btn-secondary'>
					Очистити кошик
				</button>
				<button onClick={order} className='btn btn-secondary'>
					Замовити
				</button>
			</div>
		</div>
	)
}
