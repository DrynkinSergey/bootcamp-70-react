import { useTodos } from '../../store/hooks'
import { TodoItem } from './TodoItem'

export const List = () => {
	const { todos } = useTodos()
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
