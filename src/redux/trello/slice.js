import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	boards: [
		{
			id: 1,
			title: 'In Progress',
		},
		{
			id: 2,
			title: 'Review',
		},
		{
			id: 3,
			title: 'Done',
		},
	],
	items: [],
}

const slice = createSlice({
	name: 'trello',
	initialState,
	selectors: {
		selectBoards: state => state.boards,
		selectItems: state => state.items,
	},
	reducers: {
		addTask: (state, { payload }) => {
			state.items.push(payload)
		},
		deleteTask: (state, { payload }) => {
			state.items = state.items.filter(item => item.id !== payload)
		},
		moveTask: (state, { payload }) => {
			const item = state.items.find(item => item.id === payload.id)
			if (item) {
				item.board = payload.targetBoard
			}
		},
	},
})

export const trelloReducer = slice.reducer
export const { selectBoards, selectItems } = slice.selectors
export const { addTask, deleteTask, moveTask } = slice.actions
