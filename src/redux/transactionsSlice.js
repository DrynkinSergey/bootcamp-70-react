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
	selectors: {
		selectTransactions: state => state.transactions,
		selectBalance: state => state.transactions.reduce((acc, item) => acc + item.sum, 0),
		selectIncome: state =>
			state.transactions.filter(item => item.type === 'Income').reduce((acc, item) => acc + item.sum, 0),
		selectExpense: state =>
			state.transactions.filter(item => item.type === 'Expense').reduce((acc, item) => acc + item.sum, 0),
	},
	reducers: {
		addTransaction: (state, action) => {
			state.transactions.push(action.payload)
		},
		deleteTransaction: (state, action) => {
			state.transactions = state.transactions.filter(item => item.id !== action.payload)
		},
	},
})

export const transactionsReducer = slice.reducer
export const { addTransaction, deleteTransaction } = slice.actions
export const { selectTransactions, selectBalance, selectIncome, selectExpense } = slice.selectors
