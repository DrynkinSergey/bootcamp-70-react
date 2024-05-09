import clsx from 'clsx'
import { Link, NavLink, Outlet } from 'react-router-dom'

export const Layout = () => {
	const buildLinkClass = ({ isActive }) => {
		return clsx(isActive && 'activeLink')
	}
	return (
		<div className=' grid '>
			<nav className='flex gap-4 text-2xl bg-blue-900 text-white font-bold py-4 px-4 justify-end'>
				{/* Щоб переходити по маршрутам потрібно використовувати Link замість a */}
				<NavLink className={buildLinkClass} to='/'>
					Home
				</NavLink>
				<NavLink className={buildLinkClass} to='/about'>
					About
				</NavLink>
				<NavLink className={buildLinkClass} to='/login'>
					Login
				</NavLink>
			</nav>

			{/* Створюється Outlet для того, щоб відмалювати якийсь маршрут */}
			<div className='p-4  min-h-screen'>
				<Outlet />
			</div>
		</div>
	)
}
