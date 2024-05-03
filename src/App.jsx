import { Employee } from './components/Employees/Employee'
import { Form } from './components/Form/Form'
import { ExampleForm } from './components/FormWithID/ExampleForm'
import { PetForm } from './components/PetForm/PetForm'
import { PetFormFormik } from './components/PetForm/PetFormFormik'
import { PetFormRHF } from './components/PetForm/PetFormRHF'

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
			<PetFormFormik />
			<PetFormRHF />
		</>
	)
}

export default App
