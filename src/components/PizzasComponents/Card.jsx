import { usePizzas } from '../../store/hooks'

export const Card = ({ item }) => {
	const { addToCart } = usePizzas()
	if (!item) return
	return (
		<div className='card card-compact  bg-base-100 shadow-xl'>
			<figure>
				<img className='w-full' src={item.img} alt={item.title} />
			</figure>
			<div className='card-body'>
				<h2 className='card-title font-bold'>{item.title}</h2>
				<p>Ціна: {item.price} грн.</p>
				<p>Вага: {item.weight}</p>
				<p>Розмір: {item.size}</p>
				<div className='card-actions justify-end'>
					<button onClick={() => addToCart(item)} className='btn btn-primary'>
						В корзину
					</button>
				</div>
			</div>
		</div>
	)
}
