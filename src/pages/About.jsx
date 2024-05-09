import { NavLink, Outlet } from 'react-router-dom'
import { buildLinkClass } from '../helpers/addActiveClass'

export const About = () => {
	return (
		<div>
			<h1>Welcome to our website!</h1>
			<nav className='flex bg-red-500 py-2  gap-4 justify-center'>
				<NavLink className={({ isActive }) => buildLinkClass(isActive, 'aboutLink')} to='team'>
					Team
				</NavLink>
				<NavLink className={({ isActive }) => buildLinkClass(isActive, 'aboutLink')} to='company'>
					Company
				</NavLink>
				<NavLink className={({ isActive }) => buildLinkClass(isActive, 'aboutLink')} to='ourMission'>
					Mission
				</NavLink>
			</nav>
			<Outlet />
		</div>
	)
}
