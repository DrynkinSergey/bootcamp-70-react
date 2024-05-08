import { usePizza } from '../store/hooks'
import { PizzaItem } from './PizzaItem'

export const PizzaList = () => {
	const { pizzas } = usePizza()
	return (
		<ul className='grid grid-cols-3 max-w-6xl gap-4 p-4 mx-auto'>
			{pizzas.map(pizza => (
				<PizzaItem key={pizza.id} pizza={pizza} />
			))}
		</ul>
	)
}
