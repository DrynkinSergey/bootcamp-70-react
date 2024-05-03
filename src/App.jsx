import { Employee } from './components/Employees/Employee'
import { Form } from './components/Form/Form'
import { ExampleForm } from './components/FormWithID/ExampleForm'
import { PetForm } from './components/PetForm/PetForm'

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
			<PetForm />
		</>
	)
}

export default App
