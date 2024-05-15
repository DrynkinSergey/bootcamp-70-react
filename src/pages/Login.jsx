import { useDispatch } from 'react-redux'
import { AuthForm } from '../components/AuthForm'
import { login } from '../redux/authSlice'

export const Login = () => {
	const dispatch = useDispatch()
	const handleSubmit = data => {
		dispatch(login(data))
	}
	const initialValues = {
		email: '',
		password: '',
	}
	return <AuthForm type='login' initialValues={initialValues} handleSubmit={handleSubmit} />
}
