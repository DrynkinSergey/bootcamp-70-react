import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logoutThunk } from '../redux/auth/operations'

export const Navbar = () => {
	const dispatch = useDispatch()
	return (
		<nav className='flex gap-4 items-center'>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/todos'>Todos</NavLink>

			<button onClick={() => dispatch(logoutThunk())} className='btn btn-primary'>
				Logout
			</button>
		</nav>
	)
}
