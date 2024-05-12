import { TodoItem } from './TodoItem'

export const List = () => {
	return (
		<div className='bg-slate-200 min-h-screen'>
			<ul className='grid grid-cols-2 gap-4 p-4'>
				{[
					{ id: 1, todo: 'Do something nice for someone I care about' },
					{ id: 2, todo: 'Memorize the fifty states and their capitals' },
					{ id: 3, todo: 'Watch a classic movie' },
				].map(todo => (
					<TodoItem key={todo.id} todo={todo} />
				))}
			</ul>
		</div>
	)
}
