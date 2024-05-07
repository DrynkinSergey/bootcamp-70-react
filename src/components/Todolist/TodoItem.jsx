import { useTodos } from '../../store/hooks'

export const TodoItem = ({ todo }) => {
	const { deleteTodo } = useTodos()
	return (
		<div className='card  bg-base-100 shadow-xl'>
			<div className='card-body'>
				<h2 className='card-title'>{todo.todo}</h2>
				<div className='card-actions justify-end'>
					<button onClick={() => deleteTodo(todo.id)} className='btn btn-primary'>
						Delete
					</button>
				</div>
			</div>
		</div>
	)
}
