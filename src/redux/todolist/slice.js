import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import {
	addTodoThunk,
	deleteTodoThunk,
	editTodoThunk,
	fetchTodosThunk,
	likeTodoThunk,
	toggleTodoThunk,
} from './operations'
import { logoutThunk } from '../auth/operations'

// Створюємо початковий стан
const initialState = {
	todos: [],
	isLoading: false,
	isError: false,
}

// Створюємо слайс
const slice = createSlice({
	// даємо ім'я (МАЄ СПІВПАДАТИ З НАЗВОЮ В СТОРІ!!!!)
	name: 'todos',
	// передаємо початковий стан
	initialState,

	// Маємо можливість отримувати селектори прям в слайсі
	selectors: {
		selectTodos: state => state.todos,
		selectIsLoading: state => state.isLoading,
		selectIsError: state => state.isError,
	},

	extraReducers: builder => {
		builder
			.addCase(fetchTodosThunk.fulfilled, (state, { payload }) => {
				state.todos = payload
			})
			// Використовуємо санку з логаутом в слайсі туду
			.addCase(logoutThunk.fulfilled, () => {
				return initialState
			})
			.addCase(deleteTodoThunk.fulfilled, (state, { payload }) => {
				state.todos = state.todos.filter(item => item.id !== payload)
			})
			.addCase(addTodoThunk.fulfilled, (state, { payload }) => {
				state.todos.push(payload)
			})
			.addCase(likeTodoThunk.fulfilled, (state, { payload }) => {
				const item = state.todos.find(item => item.id === payload)
				item.liked = !item.liked
			})
			.addCase(toggleTodoThunk.fulfilled, (state, { payload }) => {
				const item = state.todos.find(item => item.id === payload)
				item.completed = !item.completed
			})
			.addCase(editTodoThunk.fulfilled, (state, { payload }) => {
				const item = state.todos.find(item => item.id === payload.id)
				item.todo = payload.todo
			})
			.addMatcher(
				isAnyOf(
					fetchTodosThunk.pending,
					likeTodoThunk.pending,
					toggleTodoThunk.pending,
					editTodoThunk.pending,
					deleteTodoThunk.pending
				),
				state => {
					state.error = false
					state.isLoading = true
				}
			)
			.addMatcher(
				isAnyOf(
					fetchTodosThunk.rejected,
					likeTodoThunk.rejected,
					toggleTodoThunk.rejected,
					editTodoThunk.rejected,
					deleteTodoThunk.rejected
				),
				state => {
					state.isLoading = false
					state.error = true
				}
			)
			.addMatcher(
				isAnyOf(
					fetchTodosThunk.fulfilled,
					likeTodoThunk.fulfilled,
					toggleTodoThunk.fulfilled,
					editTodoThunk.fulfilled,
					deleteTodoThunk.fulfilled
				),
				state => {
					state.isLoading = false
				}
			)
	},
})

// експорт редьюсера (його стан, логіка)
export const todoReducer = slice.reducer

// експорт селекторів
export const { selectTodos, selectIsError, selectIsLoading } = slice.selectors
