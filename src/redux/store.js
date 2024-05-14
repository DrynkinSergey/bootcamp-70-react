import { counterReducer } from './counter/reducer'
import { todoReducer } from './todolist/reducer'
import { filterReducer } from './filter/reducer'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		todolist: todoReducer,
		filter: filterReducer,
	},
	devTools: import.meta.env.mode !== 'production',
})
