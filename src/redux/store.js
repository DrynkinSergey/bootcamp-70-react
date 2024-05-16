import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todolist/slice'
import { filterReducer } from './filter/slice'

export const store = configureStore({
	reducer: {
		todos: todoReducer,
		filter: filterReducer,
	},

	devTools: import.meta.env.MODE !== 'production', // true
})
