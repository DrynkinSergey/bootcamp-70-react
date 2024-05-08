import { EmptyCart } from '../components/EmptyCart'
import { usePages, usePizza } from '../store/hooks'

export const Cart = () => {
	const { cart, totalSum, increaseQty, decreaseQty, resetCart, deleteFromCart } = usePizza()
	const { setPage } = usePages()
	if (!cart.length) {
		return <EmptyCart />
	}
	return (
		<div className='w-2/3 mx-auto'>
			<ul className='grid gap-2  p-4 '>
				{cart.map(item => (
					<li
						className='bg-slate-200 p-4 items-center justify-between shadow-md rounded-md border-2 flex gap-4'
						key={item.id}
					>
						<img width={150} src={item.img} alt={item.title} />
						<p>{item.title}</p>
						<div className='flex items-center gap-2'>
							<button onClick={() => decreaseQty(item)} className='btn btn-primary'>
								-
							</button>
							<p>{item.quantity}</p>
							<button onClick={() => increaseQty(item)} className='btn btn-primary'>
								+
							</button>
						</div>
						<p>
							{item.quantity}x{item.price}
						</p>
						<p>{item.price * item.quantity} грн.</p>

						<button onClick={() => deleteFromCart(item)} className='btn btn-error'>
							Видалити
						</button>
					</li>
				))}
			</ul>
			<div className='flex  flex-col'>
				<p className='font-bold'>Всього: {totalSum} грн.</p>
				<div className='flex gap-4'>
					<button className='btn btn-info' onClick={() => setPage('checkout')}>
						Оформити замовлення
					</button>
					<button onClick={resetCart} className='btn btn-error'>
						Очистити корзину
					</button>
				</div>
			</div>
		</div>
	)
}
