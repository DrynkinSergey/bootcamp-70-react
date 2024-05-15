import { useDispatch, useSelector } from 'react-redux'
import { logout, selectCurrentUser } from '../redux/authSlice'
import { NavLink } from 'react-router-dom'
import { selectBalance } from '../redux/transactionsSlice'
import { buildLinkClass } from '../helpers/addActiveClass'

export const Navbar = () => {
	const user = useSelector(selectCurrentUser)
	const balance = useSelector(selectBalance)
	const dispatch = useDispatch()
	return (
		<div className='navbar bg-slate-400'>
			<div className='navbar-start '>
				<div className='dropdown'>
					<h2>
						{user.name} | {balance}
					</h2>
				</div>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1 flex gap-4 text-xl'>
					<NavLink className={({ isActive }) => buildLinkClass(isActive, 'navLink')} to='/'>
						Dashboard
					</NavLink>
					<NavLink className={({ isActive }) => buildLinkClass(isActive, 'navLink')} to='/statistics'>
						Statistics
					</NavLink>
					<NavLink className={({ isActive }) => buildLinkClass(isActive, 'navLink')} to='/add-transaction'>
						Add Transaction
					</NavLink>
				</ul>
			</div>
			<div className='navbar-end'>
				<button onClick={() => dispatch(logout())} className='btn btn-error'>
					Logout
				</button>
			</div>
		</div>
	)
}
