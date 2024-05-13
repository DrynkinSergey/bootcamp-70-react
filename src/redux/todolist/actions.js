import { nanoid } from 'nanoid'
import { ADD_TODO, DELETE_TODO, EDIT_TODO, LIKE_TODO, TOGGLE_TODO } from './constants'

export const deleteTodo = id => ({ type: DELETE_TODO, payload: id })
export const addTodo = todo => ({
	type: ADD_TODO,
	payload: {
		todo,
		id: nanoid(),
		completed: false,
		liked: false,
	},
})

export const toggleTodo = id => ({ type: TOGGLE_TODO, payload: id })
export const likeTodo = id => ({ type: LIKE_TODO, payload: id })
export const editTodo = todo => ({ type: EDIT_TODO, payload: todo })
