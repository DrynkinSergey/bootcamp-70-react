import { deleteTask, moveTask, selectBoards } from '../../redux/trello/slice'

import { useDispatch, useSelector } from 'react-redux'
export const ListItem = ({ item }) => {
	const tables = useSelector(selectBoards)
	const dispatch = useDispatch()

	return (
		<li className='flex gap-2 justify-between items-center px-4'>
			<p>{item.title}</p>
			<select
				onChange={e => dispatch(moveTask({ id: item.id, targetBoard: +e.target.value }))}
				className='select select-primary w-1/2 '
			>
				<option disabled selected>
					SELECT TABLE
				</option>
				{tables
					.filter(table => table.id !== item.board)
					.map(item => (
						<option key={item.id} value={item.id}>
							{item.title}
						</option>
					))}
			</select>
			<button onClick={() => dispatch(deleteTask(item.id))} className='btn btn-error'>
				Delete
			</button>
		</li>
	)
}
