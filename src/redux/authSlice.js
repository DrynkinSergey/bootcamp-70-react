import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
	users: [],
	currentUser: null,
	isLoggedIn: false,
}

const slice = createSlice({
	name: 'auth',
	initialState,
	selectors: {
		selectUsers: state => state.users,
		selectCurrentUser: state => state.currentUser,
		selectIsLoggedIn: state => state.isLoggedIn,
	},
	reducers: {
		register: (state, action) => {
			if (state.users.find(user => user.email === action.payload.email)) {
				toast.error('User already exists')
			} else {
				state.users.push(action.payload)
				toast.success('User created')
				state.currentUser = action.payload
				state.isLoggedIn = true
			}
		},
		login: (state, action) => {
			if (!state.users.find(user => user.email === action.payload.email && user.password === action.payload.password)) {
				toast.error('Invalid email or password')
			} else {
				state.currentUser = state.users.find(item => item.email === action.payload.email)
				state.isLoggedIn = true
				toast.success('User logged in')
			}
		},
		logout: state => {
			state.currentUser = null
			state.isLoggedIn = false
		},
	},
})

export const authReducer = slice.reducer
export const { register, login, logout } = slice.actions
export const { selectUsers, selectCurrentUser, selectIsLoggedIn } = slice.selectors
