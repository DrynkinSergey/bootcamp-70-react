import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	count: 0,
	step: 1,
}

const slice = createSlice({
	name: 'counter',
	initialState,
	selectors: {
		selectCounter: state => state.count,
		selectStep: state => state.step,
	},
	reducers: {
		increment: (state, { payload }) => {
			state.count += state.step
		},
		decrement: (state, { payload }) => {
			state.count -= state.step
		},
		reset: (state, { payload }) => {
			return initialState
		},
		changeStep: (state, { payload }) => {
			state.step = payload
		},
	},
})

export const counterReducer = slice.reducer
export const { increment, decrement, reset, changeStep } = slice.actions
export const { selectCounter, selectStep } = slice.selectors
