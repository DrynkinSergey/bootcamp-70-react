import { useSelector } from 'react-redux'
import { TodoItem } from './TodoItem'
import { selectTodos } from './../../redux/todolist/selectors'
import { selectFilter } from '../../redux/filter/selectors'

export const List = () => {
	const todos = useSelector(selectTodos)
	const filter = useSelector(selectFilter)

	const getFilteredData = () => {
		switch (filter) {
			case 'all':
				return todos
			case 'active':
				return todos.filter(item => !item.completed)
			case 'completed':
				return todos.filter(item => item.completed)
			case 'liked':
				return todos.filter(item => item.liked)
			default:
				return todos
		}
	}

	const filteredData = getFilteredData()
	return (
		<div className='bg-slate-200 min-h-screen'>
			<ul className='grid grid-cols-2 gap-4 p-4'>
				{filteredData.map(todo => (
					<TodoItem key={todo.id} todo={todo} />
				))}
			</ul>
		</div>
	)
}
