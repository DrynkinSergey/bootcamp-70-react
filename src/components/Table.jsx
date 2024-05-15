import { useSelector } from 'react-redux'
import { Item } from './Item'
import { selectTransactions } from '../redux/transactionsSlice'

export const Table = () => {
	const transactions = useSelector(selectTransactions)
	return (
		<div className='overflow-x-auto w-3/4 mx-auto py-10'>
			<table className='table'>
				<thead className='text-2xl font-bold'>
					<tr>
						<th></th>
						<th>Comment</th>
						<th>Type</th>
						<th>Category</th>
						<th>Date</th>
						<th>Sum</th>
						<th>Options</th>
					</tr>
				</thead>
				<tbody className='text-xl'>
					{transactions.map((item, idx) => (
						<Item key={item.id} item={item} idx={idx} />
					))}
				</tbody>
			</table>
		</div>
	)
}
