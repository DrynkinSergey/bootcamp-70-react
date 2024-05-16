import axios from 'axios'
import { fetchDataSuccess, isError, isLoading } from './slice'

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
