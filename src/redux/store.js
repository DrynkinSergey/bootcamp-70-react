import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counter/slice'
import { todoReducer } from './todolist/slice'
import { filterReducer } from './filter/slice'

console.log(import.meta.env)

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		todos: todoReducer,
		filter: filterReducer,
	},
	devTools: import.meta.env.MODE !== 'production', // true
})
