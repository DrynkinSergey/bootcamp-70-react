import { createSlice } from '@reduxjs/toolkit'
import { doSomething } from '../auth/slice'
import { toast } from 'react-toastify'

const initialState = {
	filter: 'all',
}

const slice = createSlice({
	name: 'filter',
	initialState,
	selectors: {
		selectFilter: state => state.filter,
	},
	reducers: {
		setFilter: (state, { payload }) => {
			state.filter = payload
		},
	},
	extraReducers: builder => {
		builder.addCase(doSomething, () => {
			toast.info('Я перехопив екшен DO SOMETHING')
			return initialState
		})
	},
})

export const filterReducer = slice.reducer
export const { setFilter } = slice.actions
export const { selectFilter } = slice.selectors
