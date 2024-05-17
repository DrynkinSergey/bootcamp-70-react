import { TodoItem } from './TodoItem'
import { getFilteredData } from './../../helpers/getFilteredData'
import { useState } from 'react'
import Modal from '../Modal/Modal'
import { EditTodo } from './EditTodo'

export const List = () => {
	const [isOpen, setIsOpen] = useState(false)
	const openModal = () => setIsOpen(true)
	const closeModal = () => setIsOpen(false)
	const [editedData, setEditedData] = useState(null)
	// const filteredData = getFilteredData(todos, filter)
	const openElement = todo => {
		setEditedData(todo)
		openModal()
	}
	return (
		<div className='bg-slate-200 min-h-screen'>
			<ul className='grid grid-cols-2 gap-4 p-4'>
				{[].map(todo => (
					<TodoItem openElement={openElement} key={todo.id} todo={todo} />
				))}
			</ul>
			{isOpen && (
				<Modal title={editedData?.todo} onClose={closeModal}>
					<EditTodo close={closeModal} todo={editedData} />
				</Modal>
			)}
		</div>
	)
}