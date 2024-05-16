import { useDispatch, useSelector } from 'react-redux'
import clsx from 'clsx'
import { selectFilter, setFilter } from '../../redux/filter/slice'

export const Filter = () => {
	const filter = useSelector(selectFilter)
	const dispatch = useDispatch()
	return (
		<div className='flex justify-center gap-2 py-2'>
			<button
				onClick={() => dispatch(setFilter('all'))}
				className={clsx('btn', filter === 'all' ? 'btn-success' : 'btn-primary')}
			>
				All
			</button>
			<button
				onClick={() => dispatch(setFilter('active'))}
				className={clsx('btn', filter === 'active' ? 'btn-success' : 'btn-primary')}
			>
				Active
			</button>
			<button
				onClick={() => dispatch(setFilter('completed'))}
				className={clsx('btn', filter === 'completed' ? 'btn-success' : 'btn-primary')}
			>
				Completed
			</button>
			<button
				onClick={() => dispatch(setFilter('liked'))}
				className={clsx('btn', filter === 'liked' ? 'btn-success' : 'btn-primary')}
			>
				Liked
			</button>
		</div>
	)
}
