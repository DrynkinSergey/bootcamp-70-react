import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todolist/slice'
import { filterReducer } from './filter/slice'
import logger from 'redux-logger'
import { toast } from 'react-toastify'
import axios from 'axios'
import moment from 'moment'
import { todoApi } from './todoApi'
import { setupListeners } from '@reduxjs/toolkit/query'

const myMiddleware = store => next => action => {
	if (action?.payload?.todo?.toLowerCase() === 'angular') {
		axios.post('https://6645accbb8925626f892a498.mockapi.io/archive', {
			createdAt: moment(new Date()).format('DD.MM.YYYY HH:mm:ss'),
			...action.payload,
		})
	}
	next(action)
}

export const store = configureStore({
	reducer: {
		todos: todoReducer,
		filter: filterReducer,
		[todoApi.reducerPath]: todoApi.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(todoApi.middleware),

	devTools: import.meta.env.MODE !== 'production', // true
})

setupListeners(store.dispatch)
