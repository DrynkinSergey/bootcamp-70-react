import { AddForm } from './AddForm'
import { Filter } from './Filter'
import { List } from './List'

export const TodolistApp = () => {
	return (
		<div>
			<AddForm />
			<Filter />
			<List />
		</div>
	)
}
