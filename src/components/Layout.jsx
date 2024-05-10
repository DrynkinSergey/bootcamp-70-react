import { NavLink, Outlet } from 'react-router-dom'
import { buildLinkClass } from '../helpers/addActiveClass'
import { useAuth } from '../store/hooks'
import { useState } from 'react'
import Modal from './Modal/Modal'

export const Layout = () => {
	const { logout } = useAuth()
	const [isOpen, setIsOpen] = useState(false)
	const closeModal = () => setIsOpen(false)
	const openModal = () => setIsOpen(true)
	return (
		<div className=' grid '>
			<nav className='flex gap-4 text-2xl bg-blue-900 text-white font-bold py-4 px-4 justify-end'>
				{/* Щоб переходити по маршрутам потрібно використовувати Link замість a */}
				<NavLink className={({ isActive }) => buildLinkClass(isActive, 'activeLink')} to='/'>
					Home
				</NavLink>
				<NavLink className={({ isActive }) => buildLinkClass(isActive, 'activeLink')} to='/about'>
					About
				</NavLink>
				<NavLink className={({ isActive }) => buildLinkClass(isActive, 'activeLink')} to='/users'>
					Users
				</NavLink>
				{/* <NavLink className={({ isActive }) => buildLinkClass(isActive, 'activeLink')} to='/login'>
					Login
				</NavLink> */}
				<button onClick={openModal} className='btn btn-primary'>
					Logout
				</button>
			</nav>

			{isOpen && (
				<Modal onClose={closeModal} title='Enter leave....'>
					<div className='flex gap-4 justify-center items-center p-10'>
						<button className='btn btn-primary' onClick={logout}>
							Yes
						</button>
						<button className='btn btn-error' onClick={closeModal}>
							No
						</button>
					</div>
				</Modal>
			)}

			{/* Створюється Outlet для того, щоб відмалювати якийсь маршрут */}
			<div className='p-4  min-h-screen'>
				<Outlet />
			</div>
		</div>
	)
}
