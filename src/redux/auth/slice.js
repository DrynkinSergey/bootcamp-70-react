import { createSlice } from '@reduxjs/toolkit'
import { loginThunk, logoutThunk, refreshThunk, registerThunk } from './operations'
import { toast } from 'react-toastify'

const initialState = {
	user: {
		email: '',
		name: '',
	},
	token: null,
	isLoggedIn: false,
	error: false,
	isLoading: false,
	isRefreshing: false,
}

const slice = createSlice({
	name: 'auth',
	initialState,
	selectors: {
		selectUserName: state => state.user.name,
		selectToken: state => state.token,
		selectIsLoggedIn: state => state.isLoggedIn,
		selectIsRefreshing: state => state.isRefreshing,
	},
	reducers: {
		doSomething: () => {
			toast.info('Я знаходжусь в AUTH SLICE')
		},
	},
	extraReducers: builder => {
		builder
			.addCase(registerThunk.fulfilled, (state, action) => {
				state.user = action.payload.user
				state.token = action.payload.token
				state.isLoggedIn = true
			})
			.addCase(loginThunk.fulfilled, (state, action) => {
				state.user = action.payload.user
				state.token = action.payload.token
				state.isLoggedIn = true
			})
			.addCase(logoutThunk.fulfilled, () => {
				return initialState
			})
			.addCase(refreshThunk.fulfilled, (state, action) => {
				state.user = action.payload
				state.isLoggedIn = true
				state.isRefreshing = false
			})
			.addCase(refreshThunk.pending, state => {
				state.isRefreshing = true
			})
			.addCase(refreshThunk.rejected, state => {
				state.isRefreshing = false
			})
	},
})

export const authReducer = slice.reducer
export const { selectIsLoggedIn, selectToken, selectUserName, selectIsRefreshing } = slice.selectors
export const { doSomething } = slice.actions
