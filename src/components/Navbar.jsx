import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectIsLoggedIn } from '../redux/auth/slice'
import { logoutThunk } from '../redux/auth/operations'

export const Navbar = () => {
	const dispatch = useDispatch()
	const isLoggedIn = useSelector(selectIsLoggedIn)
	return (
		<nav className='flex gap-4 items-center'>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/todos'>Todos</NavLink>
			{!isLoggedIn ? (
				<>
					<NavLink to='/login'>Login</NavLink>
					<NavLink to='/register'>Register</NavLink>
				</>
			) : (
				<button onClick={() => dispatch(logoutThunk())} className='btn btn-primary'>
					Logout
				</button>
			)}
		</nav>
	)
}
