import { createAction, nanoid } from '@reduxjs/toolkit'

//Before
// export const addTodo = todo => ({
// 	type: ADD_TODO,
// 	payload: {
// 		todo,
// 		id: nanoid(),
// 		completed: false,
// 		liked: false,
// 	},
// })
// export const deleteTodo = id => ({ type: DELETE_TODO, payload: id })
// export const toggleTodo = id => ({ type: TOGGLE_TODO, payload: id })
// export const likeTodo = id => ({ type: LIKE_TODO, payload: id })
// export const editTodo = todo => ({ type: EDIT_TODO, payload: todo })

// AFTER

export const addTodo = createAction('addTodo', todo => {
	return {
		payload: {
			todo,
			id: nanoid(),
			completed: false,
			liked: false,
		},
	}
})
export const deleteTodo = createAction('deleteTodo')
export const toggleTodo = createAction('toggleTodo')
export const likeTodo = createAction('likeTodo')
export const editTodo = createAction('editTodo')
