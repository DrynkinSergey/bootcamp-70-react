import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	income: ['Salary', 'Freelance', 'Investment', 'Other'],
	expense: ['Food', 'House', 'Entertainment', 'Self care', 'Car', 'Family', 'Other'],
}

const slice = createSlice({
	name: 'cats',
	initialState,
	selectors: {
		selectIncome: state => state.income,
		selectExpense: state => state.expense,
	},
	reducers: {},
})

export const catsReducer = slice.reducer
export const { selectIncome, selectExpense } = slice.selectors
