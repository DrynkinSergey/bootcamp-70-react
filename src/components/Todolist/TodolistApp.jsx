import { useDispatch } from 'react-redux'
import { AddForm } from './AddForm'
import { Filter } from './Filter'
import { List } from './List'
import { useEffect } from 'react'
import { fetchTodosThunk } from '../../redux/todolist/operations'

export const TodolistApp = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchTodosThunk())
	}, [dispatch])

	return (
		<div>
			<AddForm />
			<Filter />
			<List />
		</div>
	)
}
