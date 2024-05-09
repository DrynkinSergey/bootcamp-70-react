import { Link } from 'react-router-dom'

const Login = () => {
	return (
		<div className='flex flex-col text-5xl justify-center items-center min-h-screen'>
			<h1>Login</h1>
			<Link to='/'>Home</Link>
		</div>
	)
}

export default Login
