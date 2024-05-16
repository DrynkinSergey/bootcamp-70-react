import { createSlice } from '@reduxjs/toolkit'

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
	// Створюємо редьюсери(екшени)
	reducers: {
		deleteTodo: (state, { payload }) => {
			state.todos = state.todos.filter(item => item.id !== payload)
		},
		toggleTodo: (state, { payload }) => {
			const item = state.todos.find(item => item.id === payload)
			if (item) {
				item.completed = !item.completed
			}
		},
		likeTodo: (state, { payload }) => {
			const item = state.todos.find(item => item.id === payload)
			if (item) {
				item.liked = !item.liked
			}
		},
		editTodo: (state, { payload }) => {
			const itemIndex = state.todos.findIndex(item => item.id === payload.id)
			if (itemIndex !== -1) {
				state.todos[itemIndex] = payload
			}
		},

		addTodo: (state, { payload }) => {
			state.todos.push(payload)
		},
		fetchDataSuccess: (state, { payload }) => {
			state.todos = payload
			state.isLoading = false
		},
		isError: (state, { payload }) => {
			state.isError = payload
		},
		isLoading: (state, { payload }) => {
			state.isLoading = payload
		},
	},
})

// експорт редьюсера (його стан, логіка)
export const todoReducer = slice.reducer
// екпорт екшенів - того, що написано в редьюсерах (reducers)
export const { addTodo, deleteTodo, toggleTodo, likeTodo, editTodo, fetchDataSuccess, isError, isLoading } =
	slice.actions
// експорт селекторів
export const { selectTodos, selectIsError, selectIsLoading } = slice.selectors
