import { createSelector } from '@reduxjs/toolkit'
import { selectFilter } from '../filter/slice'
import { selectTodos } from './slice'

export const selectFilteredData = state => {
	// const filter = state => state.filter.filter
	const filter = selectFilter(state)
	const todos = selectTodos(state)

	console.log('Filter is done')
	switch (filter) {
		case 'all':
			return todos
		case 'active':
			return todos.filter(item => !item.completed)
		case 'completed':
			return todos.filter(item => item.completed)
		case 'liked':
			return todos.filter(item => item.liked)
		default:
			return todos
	}
}

export const selectFilteredDataMemo = createSelector([selectTodos, selectFilter], (todos, filter) => {
	console.log('Filter is done')
	switch (filter) {
		case 'all':
			return todos
		case 'active':
			return todos.filter(item => !item.completed)
		case 'completed':
			return todos.filter(item => item.completed)
		case 'liked':
			return todos.filter(item => item.liked)
		default:
			return todos
	}
})

export const selectUncompletedTodos = state => {
	console.log('selectUncompletedTodos')
	const todos = selectTodos(state)
	return todos.reduce((total, item) => total + !item.completed, 0)
}

export const selectUncompletedTodosMemo = createSelector([selectTodos], todos => {
	console.log('MEMO UNCOMPLETED')
	return todos.reduce((total, item) => total + !item.completed, 0)
})
