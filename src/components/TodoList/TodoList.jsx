import { useEffect, useState } from 'react'
import todosData from './../../assets/todos.json'
import { TodoItem } from './TodoItem'
import s from './TodoList.module.css'
import { nanoid } from 'nanoid'
import Button from './../Button/Button'
import Modal from '../Modal/Modal'
export const TodoList = () => {
	const [todos, setTodos] = useState(() => {
		const savedTodos = window.localStorage.getItem('todos')
		if (savedTodos !== null) {
			return JSON.parse(savedTodos)
		}
		return todosData
	})
	const [title, setTitle] = useState('')
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		window.localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	const handleDelete = id => {
		setTodos(prev => prev.filter(item => item.id !== id))
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
		const newValue = prompt('Enter new value')
		setTodos(prev => prev.map(item => (item.id === id ? { ...item, todo: newValue } : item)))
	}
	const handleToggleTodo = id => {
		setTodos(prev => prev.map(item => (item.id === id ? { ...item, completed: !item.completed } : item)))
	}
	const openModal = () => {
		setIsOpen(true)
	}
	const closeModal = () => {
		setIsOpen(false)
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
				<Button onClick={openModal}>Open modal</Button>
			</div>
			{isOpen && (
				<Modal onClose={closeModal}>
					<h1>Hello world!!!</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro perspiciatis voluptate at rerum non
						doloremque minus ducimus error similique atque in, excepturi maxime numquam enim? Beatae exercitationem
						doloremque in minus?
					</p>
				</Modal>
			)}
		</>
	)
}
