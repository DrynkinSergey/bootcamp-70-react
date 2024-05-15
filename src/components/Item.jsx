import clsx from 'clsx'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { deleteTransaction } from '../redux/transactionsSlice'

export const Item = ({ item, idx }) => {
	const dispatch = useDispatch()
	return (
		<tr>
			<th>{idx + 1}</th>
			<td>{item.comment}</td>
			<td className={clsx('font-bold', item.type === 'Income' ? 'text-success' : 'text-error')}>{item.type}</td>
			<td>{item.category}</td>
			<td>{moment(item.date).format('DD.MM.YYYY')}</td>
			<td className={clsx('font-bold', item.type === 'Income' ? 'text-success' : 'text-error')}>{item.sum}</td>
			<td className='flex gap-2'>
				<button className='btn btn-primary '>Edit</button>
				<button className='btn btn-error' onClick={() => dispatch(deleteTransaction(item.id))}>
					Delete
				</button>
			</td>
		</tr>
	)
}
