import { useState } from 'react'
import todosData from './../../assets/todos.json'
import { TodoItem } from './TodoItem'
import s from './TodoList.module.css'
import { nanoid } from 'nanoid'
import Button from './../Button/Button'
export const TodoList = () => {
	const [todos, setTodos] = useState(todosData)
	const [title, setTitle] = useState('')

	const handleDelete = id => {
		setTodos(prev => prev.filter(item => item.id !== id)) // [...]
	}
	const handleAddTodo = () => {
		const newTodo = {
			id: nanoid(),
			todo: title,
			completed: false,
		}
		setTodos(prev => [...prev, newTodo])
		setTitle('')
	}

	const handleRemoveSelected = () => {
		setTodos(prev => prev.filter(item => !item.completed))
	}

	const handleRemoveAll = () => {
		setTodos([])
	}

	const handleRenameTodo = id => {
		console.log(id)
		const newValue = prompt('Enter new value')
		console.log(newValue)
		setTodos(prev => prev.map(item => (item.id === id ? { ...item, todo: newValue } : item)))
	}
	const handleToggleTodo = id => {
		console.log(id)
		// 1. Отримати айді
		// 2. Пробіжатись по массиву об'єктів
		// 3. Знайти об'єкт по айді
		// 4. Замінити значення completed на протележне
		// 5. Якщо елемент не знайдено повернути його незмінним
		setTodos(prev => prev.map(item => (item.id === id ? { ...item, completed: !item.completed } : item)))

		// setTodos(prev =>
		// 	prev.map(item => {
		// 		if (item.id === id) {
		// 			return { ...item, completed: !item.completed }
		// 		}
		// 		return item
		// 	})
		// )
	}

	return (
		<>
			<div className='flex'>
				<input value={title} onChange={e => setTitle(e.target.value)} className={s.input} />
				<button className='btn border' onClick={handleAddTodo}>
					Add
				</button>
			</div>
			<ul className={s.list}>
				{todos.map(item => (
					<TodoItem
						key={item.id}
						{...item}
						handleToggleTodo={handleToggleTodo}
						handleDelete={handleDelete}
						handleRenameTodo={handleRenameTodo}
					/>
				))}
			</ul>
			<div className='flex'>
				<Button onClick={handleRemoveSelected}>Remove selected</Button>
				<Button onClick={handleRemoveAll}>Remove All</Button>
			</div>
		</>
	)
}
