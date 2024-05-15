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
		selectBalance: state => state.balance,
		selectIncome: state => state.totalIncome,
		selectExpense: state => state.totalExpense,
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
