import { Employee } from './components/Employees/Employee'
import { Form } from './components/Form/Form'

const App = () => {
	const register = data => {
		console.log('Sending data...')
		setTimeout(() => {
			console.log('Data sent', data)
		}, 1000)
		setTimeout(() => {
			console.log(`Welcome on board, ${data.username}! 🔥`)
		}, 2000)
	}
	return (
		<>
			<Employee />
			{/* <Form register={register} /> */}
		</>
	)
}

export default App
