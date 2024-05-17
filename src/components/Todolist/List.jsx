import { useSelector } from 'react-redux'
import { TodoItem } from './TodoItem'
import { useState } from 'react'
import Modal from '../Modal/Modal'
import { EditTodo } from './EditTodo'
import {
	selectFilteredData,
	selectFilteredDataMemo,
	selectUncompletedTodos,
	selectUncompletedTodosMemo,
} from '../../redux/todolist/selectors'

export const List = () => {
	// const todos = useSelector(selectFilteredData)
	// const uncompletedTodos = useSelector(selectUncompletedTodos)
	const todos = useSelector(selectFilteredDataMemo)
	const uncompletedTodos = useSelector(selectUncompletedTodosMemo)
	const [isOpen, setIsOpen] = useState(false)
	const openModal = () => setIsOpen(true)
	const closeModal = () => setIsOpen(false)
	const [editedData, setEditedData] = useState(null)
	const openElement = todo => {
		setEditedData(todo)
		openModal()
	}
	return (
		<div className='bg-slate-200 min-h-screen'>
			<h2>Uncompleted tasks: {uncompletedTodos}</h2>
			<ul className='grid grid-cols-2 gap-4 p-4'>
				{todos.map(todo => (
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
