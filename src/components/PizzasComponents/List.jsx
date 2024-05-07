import { usePizzas } from '../../store/hooks'
import { Card } from './Card'

export const List = () => {
	const { pizzas } = usePizzas()
	return (
		<div>
			<div className='grid grid-cols-3 gap-4 max-w-6xl mx-auto py-8'>
				{pizzas.map(item => (
					<Card key={item.id} item={item} />
				))}
			</div>
		</div>
	)
}
