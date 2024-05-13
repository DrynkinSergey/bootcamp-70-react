import { useSelector } from 'react-redux'
import { TodoItem } from './TodoItem'
import { selectTodos } from './../../redux/todolist/selectors'

export const List = () => {
	const todos = useSelector(selectTodos)
	return (
		<div className='bg-slate-200 min-h-screen'>
			<ul className='grid grid-cols-2 gap-4 p-4'>
				{todos.map(todo => (
					<TodoItem key={todo.id} todo={todo} />
				))}
			</ul>
		</div>
	)
}
