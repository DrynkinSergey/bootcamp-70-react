import { useDispatch, useSelector } from 'react-redux'
import { logout, selectCurrentUser } from '../redux/authSlice'
import { NavLink } from 'react-router-dom'
import { selectBalance } from '../redux/transactionsSlice'

export const Navbar = () => {
	const user = useSelector(selectCurrentUser)
	const balance = useSelector(selectBalance)
	const dispatch = useDispatch()
	return (
		<div className='navbar bg-slate-400'>
			{/* <header>
				<section>
					<h1>Budget Tracker</h1>
					<p>Balance: 20000</p>
				</section>
				<nav>
				
				</nav>
				
			</header> */}
			<div className='navbar-start '>
				<div className='dropdown'>
					<h2>
						{user.name} | {balance}
					</h2>
					<ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
						<li>
							<a>Item 1</a>
						</li>
						<li>
							<a>Parent</a>
							<ul className='p-2'>
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</li>
						<li>
							<a>Item 3</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1 flex gap-4 text-xl'>
					<NavLink to='/'>Dashboard</NavLink>
					<NavLink to='/statistics'>Statistics</NavLink>
					<NavLink to='/add-transaction'>Add Transaction</NavLink>
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
