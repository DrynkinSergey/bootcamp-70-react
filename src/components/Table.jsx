import { Item } from './Item'

export const Table = () => {
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
					{/* row 1 */}
					<Item />
					<Item />
					<Item />
					<Item />
				</tbody>
			</table>
		</div>
	)
}
