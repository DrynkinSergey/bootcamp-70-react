import { createSlice } from '@reduxjs/toolkit'

// Створюємо початковий стан
const initialState = {
	todos: [
		{ id: 1, todo: 'Do something nice for someone I care about', completed: false, liked: false },
		{ id: 2, todo: 'Memorize the fifty states and their capitals', completed: false, liked: false },
		{ id: 3, todo: 'Watch a classic movie', completed: false, liked: false },
	],
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
		// Підготовка пейлоада відбувається таким чином
		// Спочатку викликається prepare
		// Потім викликається reducer

		// addTodo: {
		// 	prepare: abc => {
		// 		return {
		// 			payload: {
		// 				todo:abc,
		// 				id: nanoid(),
		// 				completed: false,
		// 				liked: false,
		// 			},
		// 		}
		// 	},
		// 	reducer: (state, { payload }) => {
		// 		state.todos.push(payload)
		// 	},
		// },
		addTodo: (state, { payload }) => {
			state.todos.push(payload)
		},
	},
})

// експорт редьюсера (його стан, логіка)
export const todoReducer = slice.reducer
// екпорт екшенів - того, що написано в редьюсерах (reducers)
export const { addTodo, deleteTodo, toggleTodo, likeTodo, editTodo } = slice.actions
// експорт селекторів
export const { selectTodos } = slice.selectors
