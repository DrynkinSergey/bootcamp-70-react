import { TodoItem } from './TodoItem'
import { getFilteredData } from './../../helpers/getFilteredData'
import { useState } from 'react'
import Modal from '../Modal/Modal'
import { EditTodo } from './EditTodo'
import { useFetchTodosQuery } from '../../redux/todoApi'
import { Loader } from '../Loader'
import { useSelector } from 'react-redux'
import { selectFilter } from '../../redux/filter/slice'
import { BetweenVerticalStart, List as ListIcon } from 'lucide-react'
import clsx from 'clsx'
export const List = () => {
	const [isOpen, setIsOpen] = useState(false)
	const openModal = () => setIsOpen(true)
	const closeModal = () => setIsOpen(false)
	const filter = useSelector(selectFilter)
	const [editedData, setEditedData] = useState(null)
	const openElement = todo => {
		setEditedData(todo)
		openModal()
	}
	const [view, setView] = useState('list')

	const { data, isLoading, isError } = useFetchTodosQuery()
	const filteredData = getFilteredData(data, filter)
	return (
		<div className='bg-slate-200 min-h-screen'>
			{isLoading && <span className='loading loading-spinner text-info'></span>}
			{isError && <h2 className='text-red-500 text-4xl'> Something went wrong</h2>}
			<div className='flex justify-center items-center py-4 gap-2 '>
				<ListIcon onClick={() => setView('list')} color='#2a00fa' size={48} />
				<BetweenVerticalStart onClick={() => setView('grid')} color='#2a00fa' size={48} />
			</div>
			<ul className={clsx('grid  gap-4 p-4', view === 'list' ? 'grid-cols-1' : 'lg:grid-cols-3 md:grid-cols-2')}>
				{filteredData?.map(todo => (
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
