import { createReducer } from '@reduxjs/toolkit'
import { addTodo, deleteTodo, editTodo, likeTodo, toggleTodo } from './actions'

const initialState = {
	todos: [
		{ id: 1, todo: 'Do something nice for someone I care about', completed: false, liked: false },
		{ id: 2, todo: 'Memorize the fifty states and their capitals', completed: false, liked: false },
		{ id: 3, todo: 'Watch a classic movie', completed: false, liked: false },
	],
}

export const todoReducer = createReducer(initialState, builder => {
	builder
		.addCase(addTodo, (state, action) => {
			state.todos.push(action.payload)
		})
		.addCase(deleteTodo, (state, action) => {
			state.todos = state.todos.filter(todo => todo.id !== action.payload)
			// const itemIndex = state.todos.findIndex(todo => todo.id === action.payload)
			// state.todos.splice(itemIndex, 1)
		})
		.addCase(toggleTodo, (state, action) => {
			const item = state.todos.find(todo => todo.id === action.payload)
			item.completed = !item.completed
		})
		.addCase(likeTodo, (state, action) => {
			const item = state.todos.find(todo => todo.id === action.payload)
			item.liked = !item.liked
		})
		.addCase(editTodo, (state, action) => {
			const itemIndex = state.todos.findIndex(todo => todo.id === action.payload.id)
			state.todos[itemIndex] = action.payload
			// state.todos = state.todos.map(item => item.id === action.payload.id ? action.payload : item)
		})
})

// export const todoReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case deleteTodo.type: {
// 			return {
// 				...state,
// 				todos: state.todos.filter(todo => todo.id !== action.payload),
// 			}
// 		}
// 		case addTodo.type: {
// 			return {
// 				...state,
// 				todos: [...state.todos, action.payload],
// 			}
// 		}
// 		case toggleTodo.type: {
// 			return {
// 				...state,
// 				todos: state.todos.map(item => (item.id === action.payload ? { ...item, completed: !item.completed } : item)),
// 			}
// 		}
// 		case likeTodo.type: {
// 			return {
// 				...state,
// 				todos: state.todos.map(item => (item.id === action.payload ? { ...item, liked: !item.liked } : item)),
// 			}
// 		}
// 		case editTodo.toString(): {
// 			return {
// 				...state,
// 				todos: state.todos.map(item => (item.id === action.payload.id ? { ...action.payload } : item)),
// 			}
// 		}
// 		default:
// 			return state
// 	}
// }
