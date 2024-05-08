import { usePizza } from '../store/hooks'

export const PizzaItem = ({ pizza }) => {
	const { addToCart } = usePizza()
	return (
		<li className='card card-compact  bg-base-100 shadow-xl'>
			<figure>
				<img src={pizza.img} alt={pizza.title} />
			</figure>
			<div className='card-body'>
				<h2 className='text-2xl text-center font-bold'>{pizza.title}</h2>
				<p className='text-2xl'>Ціна: {pizza.price} грн.</p>
				<p className='text-2xl'>Вага: {pizza.weight} гр.</p>
				<p className='text-2xl'>Розмір: {pizza.size} см.</p>

				<div className='card-actions justify-end'>
					<button onClick={() => addToCart(pizza)} className='btn btn-primary'>
						Додати в корзину
					</button>
				</div>
			</div>
		</li>
	)
}
