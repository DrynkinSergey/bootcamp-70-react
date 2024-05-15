import { useDispatch } from 'react-redux'
import { AuthForm } from '../components/AuthForm'
import { register } from '../redux/authSlice'

export const Register = () => {
	const dispatch = useDispatch()
	const handleSubmit = data => {
		dispatch(register(data))
	}
	const initialValues = {
		email: '',
		password: '',
		name: '',
	}
	return <AuthForm type='register' initialValues={initialValues} handleSubmit={handleSubmit} />
}
