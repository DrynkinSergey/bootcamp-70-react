import axios from 'axios'
import { List } from '../components/PizzasComponents/List'
import { usePizzas } from '../store/hooks'
import { useEffect } from 'react'

export const Pizzas = () => {
	const { setPizzas } = usePizzas()

	useEffect(() => {
		const getData = async () => {
			const response = await axios.get('http://localhost:7777/pizzas')
			console.log(response.data)
			setPizzas(response.data)
		}
		getData()
	}, [setPizzas])
	return (
		<div>
			<List />
		</div>
	)
}
