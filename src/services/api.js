import axios from 'axios'

export const fetchPizzas = async () => {
	const { data } = await axios.get('http://localhost:7777/pizzas')
	return data
}

export const checkout = async data => {
	await axios.post('http://localhost:7777/orders', data)
}
