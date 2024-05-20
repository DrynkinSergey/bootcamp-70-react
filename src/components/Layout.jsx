import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'

export const Layout = () => {
	return (
		<div>
			<header className='flex justify-between items-center gap-2 px-10 py-4 bg-teal-500 text-white text-2xl font-bold'>
				<h2>Auth | Redux</h2>
				<p>test@mail.com</p>
				<Navbar />
			</header>

			<Outlet />
		</div>
	)
}
