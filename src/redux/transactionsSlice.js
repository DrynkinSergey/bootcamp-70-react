import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	transactions: [],
	balance: 0,
	totalIncome: 0,
	totalExpense: 0,
}

const slice = createSlice({
	name: 'transactions',
	initialState,

	reducers: {
		addTransaction: (state, action) => {
			state.transactions.push(action.payload)
		},
		deleteTransaction: (state, action) => {
			state.transactions = state.transactions.filter(item => item.id !== action.payload)
		},
		editTransaction: (state, action) => {
			state.transactions = state.transactions.map(item => (item.id === action.payload.id ? action.payload : item))
		},
	},
})

export const transactionsReducer = slice.reducer
export const { addTransaction, deleteTransaction, editTransaction } = slice.actions

export const selectTransactions = state =>
	state.transactions.transactions.filter(item => item.owner === state.auth.currentUser.email)

export const selectBalance = state => {
	const transactions = selectTransactions(state)
	return transactions.reduce((acc, item) => acc + item.sum, 0)
}

export const selectIncome = state => {
	const transactions = selectTransactions(state)
	return transactions.filter(item => item.type === 'Income').reduce((acc, item) => acc + item.sum, 0)
}

export const selectExpense = state => {
	const transactions = selectTransactions(state)
	return transactions.filter(item => item.type === 'Expense').reduce((acc, item) => acc + item.sum, 0)
}
