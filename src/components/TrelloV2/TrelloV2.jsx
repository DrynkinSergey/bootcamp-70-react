import { useSelector } from 'react-redux'
import { List } from './List'
import { selectBoards, selectItems } from '../../redux/trello/slice'
import { AddTask } from './AddTask'

export const TrelloV2 = () => {
	const tasks = useSelector(selectItems)
	const boards = useSelector(selectBoards)
	return (
		<div>
			<AddTask />
			<div className='grid grid-cols-3 gap-3 py-20 mx-auto px-10'>
				{boards.map(bord => (
					<List title={bord.title} key={bord.id} data={tasks.filter(item => item.board === bord.id)} />
				))}
			</div>
		</div>
	)
}
