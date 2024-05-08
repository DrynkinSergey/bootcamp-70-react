import { useEffect } from 'react'
import { fetchPizzas } from '../services/api'
import { usePizza } from '../store/hooks'
import { PizzaList } from '../components/PizzaList'

export const Pizzas = () => {
	const { setPizzas } = usePizza()
	useEffect(() => {
		const getData = async () => {
			const data = await fetchPizzas()
			setPizzas(data)
		}
		getData()
	}, [setPizzas])
	return (
		<div
			className='relative min-h-screen'
			style={{
				backgroundImage:
					'url(https://www.sadahastanesi.com/tr/public/storage/pizza-kac-kalori---pizzanin-besin-degeri.webp) ',
				backgroundSize: 'cover',
			}}
		>
			<div className='absolute inset-0 z-[1] bg-black bg-opacity-50'></div>
			<div className='relative z-[2] '>
				<PizzaList />
			</div>
		</div>
	)
}
