import { useEffect, useState } from 'react'
import { fetchUsers } from '../services/api'
import { Link } from 'react-router-dom'

const Users = () => {
	const [users, setUsers] = useState([])
	useEffect(() => {
		const getUsers = async () => {
			const data = await fetchUsers()
			setUsers(data)
		}
		getUsers()
	}, [])
	return (
		<div>
			<h1 className='text-4xl text-center'>Users</h1>
			<ul className='flex flex-col gap-4'>
				{users.map(user => (
					<li className='text-2xl font-bold' key={user.id}>
						<Link to={user.id.toString()}>
							{user.firstName} {user.lastName}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Users
