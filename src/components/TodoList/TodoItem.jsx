import s from './TodoList.module.css'
export const TodoItem = ({ id, completed, todo, handleDelete, handleToggleTodo, handleRenameTodo }) => {
	return (
		<li className={s.item}>
			<input type='checkbox' checked={completed} onChange={() => handleToggleTodo(id)} />
			<span onClick={() => handleRenameTodo(id)}>{todo}</span>
			<button className='btn ' onClick={() => handleDelete(id)}>
				Delete
			</button>
		</li>
	)
}
