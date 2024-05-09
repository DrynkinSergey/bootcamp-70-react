import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useParams } from 'react-router-dom'
import { fetchUsersById } from '../services/api'
import { buildLinkClass } from '../helpers/addActiveClass'

const UserDetails = () => {
	const { userId } = useParams()
	const [user, setUser] = useState(null)
	useEffect(() => {
		const getUser = async () => {
			const data = await fetchUsersById(userId)
			setUser(data)
		}
		getUser()
	}, [userId])
	console.log('Render')

	if (!user) return <span className='loading loading-dots loading-lg' />

	return (
		<div className='grid grid-cols-[1fr_3fr] gap-4'>
			<div>
				<Link to='/users'>Go back</Link>
				<h1>UserDetails #{userId}</h1>
				<img src={user.image} alt={user.lastName} />
				<h2>
					{user.firstName} {user.lastName}
				</h2>
				<p>Age: {user.age}</p>
				<p>Email: {user.email}</p>
				<p>Phone: {user.phone}</p>
				<p>Address: {user.address.city}</p>
			</div>
			<section>
				<nav className='flex bg-red-500 py-2  gap-4 justify-center'>
					<NavLink className={({ isActive }) => buildLinkClass(isActive, 'aboutLink')} to='info'>
						Info
					</NavLink>
					<NavLink className={({ isActive }) => buildLinkClass(isActive, 'aboutLink')} to='posts'>
						{/* https://localhost:3000/users/1/posts */}
						{/* https://localhost:3000/users/1/info */}
						Show user posts
					</NavLink>
				</nav>
				<Outlet />
			</section>
		</div>
	)
}

export default UserDetails
