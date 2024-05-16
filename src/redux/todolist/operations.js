import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://6645accbb8925626f892a498.mockapi.io/'

export const fetchTodosThunk = createAsyncThunk('todos/FetchAll', async (_, thunkApi) => {
	try {
		const { data } = await axios.get('todos')
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

export const deleteTodoThunk = createAsyncThunk('todos/Delete', async (id, thunkApi) => {
	try {
		const { data } = await axios.delete(`todos/${id}`)
		return data.id
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

export const addTodoThunk = createAsyncThunk('todos/Add', async (body, thunkApi) => {
	try {
		const { data } = await axios.post('todos', body)
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

export const likeTodoThunk = createAsyncThunk('todos/Like', async (body, thunkApi) => {
	try {
		const { data } = await axios.put(`todos/${body.id}`, { ...body, liked: !body.liked })
		return data.id
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

export const toggleTodoThunk = createAsyncThunk('todos/Toggle', async (body, thunkApi) => {
	try {
		const { data } = await axios.put(`todos/${body.id}`, { ...body, completed: !body.completed })
		return data.id
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

export const editTodoThunk = createAsyncThunk('todos/Edit', async (body, thunkApi) => {
	try {
		const { data } = await axios.put(`todos/${body.id}`, body)
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

// export const fetchTodosThunk = () => async dispatch => {
// 	try {
// 		dispatch(isLoading(true))
// 		dispatch(isError(false))
// 		const { data } = await axios.get('todos')
// 		dispatch(fetchDataSuccess(data))
// 	} catch (error) {
// 		console.log('Erorr')
// 		dispatch(isError(true))
// 	} finally {
// 		dispatch(isLoading(false))
// 	}
// }

// export const deleteTodoThunk = id => async dispatch => {
// 	try {
// 		dispatch(isLoading(true))

// 		await axios.delete(`todos/${id}`)
// 		dispatch(deleteTodo(id))
// 	} catch (error) {
// 		dispatch(isError(true))
// 	} finally {
// 		dispatch(isLoading(false))
// 	}
// }

// export const addTodoThunk = body => async dispatch => {
// 	try {
// 		dispatch(isLoading(true))
// 		const { data } = await axios.post('todos', body)
// 		dispatch(addTodo(data))
// 	} catch (error) {
// 		dispatch(isError(true))
// 	} finally {
// 		dispatch(isLoading(false))
// 	}
// }

// export const toggleTodoThunk = body => async dispatch => {
// 	try {
// 		dispatch(isLoading(true))
// 		await axios.put(`todos/${body.id}`, body)
// 		dispatch(toggleTodo(body.id))
// 	} catch (error) {
// 		dispatch(isError(true))
// 	} finally {
// 		dispatch(isLoading(false))
// 	}
// }

// export const likeTodoThunk = body => async dispatch => {
// 	try {
// 		dispatch(isLoading(true))
// 		const { data } = await axios.put(`todos/${body.id}`, { ...body, liked: !body.liked })
// 		dispatch(likeTodo(data.id))
// 	} catch (error) {
// 		dispatch(isError(true))
// 	} finally {
// 		dispatch(isLoading(false))
// 	}
// }

// export const editTodoThunk = body => async dispatch => {
// 	try {
// 		dispatch(isLoading(true))
// 		const { data } = await axios.put(`todos/${body.id}`, body)
// 		dispatch(editTodo(data))
// 	} catch (error) {
// 		dispatch(isError(true))
// 	} finally {
// 		dispatch(isLoading(false))
// 	}
// }
