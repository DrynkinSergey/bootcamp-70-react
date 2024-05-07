import { useAuth, useRouter } from '../../store/hooks'

export const Header = () => {
	const { user, logout } = useAuth()
	const { changePage } = useRouter()
	return (
		<div className=' px-2 py-2 bg-blue-800 text-white font-bold flex justify-between items-center text-4xl shadow-md'>
			<h3>TODO APP</h3>
			<p className='text-2xl'>{user.email}</p>
			<div className='flex gap-4 text-2xl items-center'>
				<button onClick={() => changePage('home')}>Home</button>
				<button onClick={() => changePage('pizzas')}>Pizzas</button>
				<button onClick={() => changePage('cart')}>Cart</button>
				<button className='btn ' onClick={logout}>
					Logout
				</button>
			</div>
		</div>
	)
}
