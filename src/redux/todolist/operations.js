import axios from 'axios'
import { addTodo, deleteTodo, editTodo, fetchDataSuccess, isError, isLoading, likeTodo, toggleTodo } from './slice'

axios.defaults.baseURL = 'https://6645accbb8925626f892a498.mockapi.io/'

export const fetchTodosThunk = () => async dispatch => {
	try {
		dispatch(isLoading(true))
		dispatch(isError(false))
		const { data } = await axios.get('todos')
		dispatch(fetchDataSuccess(data))
	} catch (error) {
		console.log('Erorr')
		dispatch(isError(true))
	} finally {
		dispatch(isLoading(false))
	}
}

export const deleteTodoThunk = id => async dispatch => {
	try {
		dispatch(isLoading(true))

		await axios.delete(`todos/${id}`)
		dispatch(deleteTodo(id))
	} catch (error) {
		dispatch(isError(true))
	} finally {
		dispatch(isLoading(false))
	}
}

export const addTodoThunk = body => async dispatch => {
	try {
		dispatch(isLoading(true))
		const { data } = await axios.post('todos', body)
		dispatch(addTodo(data))
	} catch (error) {
		dispatch(isError(true))
	} finally {
		dispatch(isLoading(false))
	}
}

export const toggleTodoThunk = body => async dispatch => {
	try {
		dispatch(isLoading(true))
		await axios.put(`todos/${body.id}`, body)
		dispatch(toggleTodo(body.id))
	} catch (error) {
		dispatch(isError(true))
	} finally {
		dispatch(isLoading(false))
	}
}

export const likeTodoThunk = body => async dispatch => {
	try {
		dispatch(isLoading(true))
		const { data } = await axios.put(`todos/${body.id}`, { ...body, liked: !body.liked })
		dispatch(likeTodo(data.id))
	} catch (error) {
		dispatch(isError(true))
	} finally {
		dispatch(isLoading(false))
	}
}

export const editTodoThunk = body => async dispatch => {
	try {
		dispatch(isLoading(true))
		const { data } = await axios.put(`todos/${body.id}`, body)
		dispatch(editTodo(data))
	} catch (error) {
		dispatch(isError(true))
	} finally {
		dispatch(isLoading(false))
	}
}
