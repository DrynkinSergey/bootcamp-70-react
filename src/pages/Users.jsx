import { useEffect, useState } from 'react'
import { fetchUsers } from '../services/api'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { useHttp } from '../hooks/useHttp'

const Users = () => {
	const [users] = useHttp(fetchUsers)

	const location = useLocation() // +
	// console.log(location)
	// console.log(location.pathname)
	// console.log(location.search)
	// console.log(location.pathname + location.search)

	// 1. Використовуємо хук для отримання двох сутностей. В яких:
	// 1 -SearchParams - об'єкт в якого є метод отримання пареметра з queryString. (searchParams.get('ключ_у_вигляді_строки'))
	// 2 - setSearchParams - метод для зміни queryString. (setSearchParams({ 'ключ_у_вигляді_строки': 'значення' }))
	const [searchParams, setSearchParams] = useSearchParams()

	// Отримали з url параметр "name" і встановили його для пошуку. Якщо немає параметра "name" то встановлюємо пустий рядок.
	const query = searchParams.get('name') ?? ''
	// const page = searchParams.get('page') ?? 1
	// const limit = searchParams.get('limit') ?? 5
	// const sort = searchParams.get('sort')
	// console.log(query, page, limit, sort)
	// console.log(typeof page, typeof limit)

	const getFilteredData = () => {
		return users?.filter(user => user.firstName.toLowerCase().includes(query.toLowerCase()))
	}
	const filteredData = getFilteredData()
	return (
		<div>
			<h1 className='text-4xl text-center'>Users</h1>
			<input
				type='text'
				placeholder='Enter username'
				value={query}
				className='input input-bordered input-primary w-full max-w-xs mb-6'
				// Використали функція setSearchParams для зміни queryString і записали туди ключ "name"
				onChange={e => setSearchParams(e.target.value ? { name: e.target.value, page: 1, limit: 5, sort: 'asc' } : {})}
			/>

			<ul className='flex flex-col gap-4'>
				{filteredData?.map(user => (
					<li className='text-2xl font-bold' key={user.id}>
						<Link to={user.id.toString()} state={location}>
							{user.firstName} {user.lastName}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Users
