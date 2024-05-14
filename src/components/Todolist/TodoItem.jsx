import { useDispatch } from 'react-redux'
import { FaStar } from 'react-icons/fa'
import { deleteTodo, likeTodo, toggleTodo } from '../../redux/todolist/slice'

export const TodoItem = ({ todo, openElement }) => {
	const dispatch = useDispatch()
	return (
		<div className='card  bg-base-100 shadow-xl relative'>
			{todo.liked && <FaStar color='gold' className='m-2 absolute right-1 top-1' />}
			<div className='card-body'>
				<h2 className='card-title'>{todo.todo}</h2>
				<div className='form-control'>
					<label className='label cursor-pointer'>
						<span className='label-text'>Set as completed</span>
						<input
							type='checkbox'
							onChange={() => dispatch(toggleTodo(todo.id))}
							checked={todo.completed}
							className='checkbox checkbox-primary'
						/>
					</label>
				</div>
				<div className='card-actions justify-end'>
					<button className='btn btn-secondary' onClick={() => openElement(todo)}>
						Edit
					</button>
					<button className='btn btn-success' onClick={() => dispatch(likeTodo(todo.id))}>
						Like
					</button>
					<button className='btn btn-primary' onClick={() => dispatch(deleteTodo(todo.id))}>
						Delete
					</button>
				</div>
			</div>
		</div>
	)
}
