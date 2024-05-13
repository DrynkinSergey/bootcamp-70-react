import { ADD_TODO, DELETE_TODO, LIKE_TODO, TOGGLE_TODO } from './constants'

const initialState = {
	todos: [
		{ id: 1, todo: 'Do something nice for someone I care about', completed: false, liked: false },
		{ id: 2, todo: 'Memorize the fifty states and their capitals', completed: false, liked: false },
		{ id: 3, todo: 'Watch a classic movie', completed: false, liked: false },
	],
}

export const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case DELETE_TODO: {
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload),
			}
		}
		case ADD_TODO: {
			return {
				...state,
				todos: [...state.todos, action.payload],
			}
		}
		case TOGGLE_TODO: {
			return {
				...state,
				todos: state.todos.map(item => (item.id === action.payload ? { ...item, completed: !item.completed } : item)),
			}
		}
		case LIKE_TODO: {
			return {
				...state,
				todos: state.todos.map(item => (item.id === action.payload ? { ...item, liked: !item.liked } : item)),
			}
		}
		default:
			return state
	}
}
