import { nanoid } from 'nanoid'
import { createContext, useState } from 'react'

export const TodoContext = createContext()

export const TodosProvider = ({ children }) => {
	const [todos, setTodos] = useState([
		{ id: 1, todo: 'Context is awesome!!', completed: false, liked: false },
		{ id: 2, todo: 'React is awesome!!', completed: false, liked: false },
	])

	const deleteTodo = id => {
		setTodos(prev => prev.filter(item => item.id !== id))
	}
	const addTodo = todo => {
		const newTodo = { id: nanoid(), todo, completed: false, liked: false }
		setTodos(prev => [...prev, newTodo])
	}

	const contexValue = {
		todos,
		deleteTodo,
		addTodo,
	}
	return <TodoContext.Provider value={contexValue}>{children}</TodoContext.Provider>
}
