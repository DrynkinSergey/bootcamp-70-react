import { EmployeesFilter } from './EmployeesFilter'
import { EmployeeList } from './EmployeeList'
import userData from './../../assets/users.json'
import { useState } from 'react'

export const Employee = () => {
	const [users, setUsers] = useState(userData)
	const [searchValue, setSearchValue] = useState('')
	const [isAvailable, setIsAvailable] = useState(false)
	const [activeSkill, setActiveSkill] = useState('all')

	const handleDeleteUser = id => {
		setUsers(prev => prev.filter(user => user.id !== id))
	}

	const getFilteredData = () => {
		return users
			.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
			.filter(item => (isAvailable ? item.isOpenToWork : item))
			.filter(item => (activeSkill === 'all' ? item : item.skills.includes(activeSkill)))
	}
	const filteredUsers = getFilteredData()
	return (
		<>
			<EmployeesFilter
				isAvailable={isAvailable}
				activeSkill={activeSkill}
				setIsAvailable={setIsAvailable}
				setSearchValue={setSearchValue}
				setActiveSkill={setActiveSkill}
			/>
			<EmployeeList users={filteredUsers} onDeleteUser={handleDeleteUser} />
		</>
	)
}
// || = '', 0, false, undefined, null
// ?? = undefined || null
