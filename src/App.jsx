import { AuthForm } from './components/AuthForm/AuthForm'
import { useUser } from './store/hooks'

export const App = () => {
	const { user, isLoggedIn, logout } = useUser()
	if (!isLoggedIn) {
		return <AuthForm />
	}
	return (
		<div className='flex justify-center min-h-screen items-center'>
			<h2>Hello {user}</h2>
			<button className='btn btn-primary' onClick={logout}>
				Logout
			</button>
		</div>
	)
}
