import { NavLink } from 'react-router-dom'

export const Navbar = () => {
	return (
		<nav className='flex gap-4 items-center'>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/todos'>Todos</NavLink>
			<NavLink to='/login'>Login</NavLink>
			<NavLink to='/register'>Register</NavLink>
		</nav>
	)
}
