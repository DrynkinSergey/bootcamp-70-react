import { useContext } from 'react'
import { AuthContext } from '../../store/AuthProvider'
import { PageContext } from '../../store/PageProvider'

export const Header = () => {
	const { user, logout } = useContext(AuthContext)
	const { setPage } = useContext(PageContext)
	const handleLogout = () => {
		logout()
		setPage('home')
	}
	return (
		<div className=' px-2 py-2 bg-red-800 text-white font-bold flex justify-between items-center text-4xl'>
			<h3>Pizza Code</h3>
			<p className='text-2xl'>{user.email}</p>
			<div className='flex gap-4 text-xl'>
				<button onClick={() => setPage('home')}>Home</button>
				<button onClick={() => setPage('pizzas')}>Pizzas</button>
				<button onClick={() => setPage('cart')}>Cart</button>

				{user.email === 'admin@mail.com' && <button onClick={() => setPage('cart')}>Admin panel</button>}
				<button className='btn ' onClick={handleLogout}>
					Logout
				</button>
			</div>
		</div>
	)
}
