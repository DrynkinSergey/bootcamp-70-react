import { useSelector } from 'react-redux'
import { selectExpense, selectIncome, selectTransactions } from '../redux/transactionsSlice'

export const Statistics = () => {
	const income = useSelector(selectIncome)
	const expense = useSelector(selectExpense)
	const transactions = useSelector(selectTransactions).length
	return (
		<div>
			<h1 className='text-3xl font-bold text-center'>Statistics</h1>
			<div className='flex justify-center items-center min-h-[50vh]'>
				<div className='stats stats-vertical lg:stats-horizontal shadow'>
					<div className='stat'>
						<div className='stat-title'>Income</div>
						<div className='stat-value'>{income}</div>
						<div className='stat-desc'>Jan 1st - Feb 1st</div>
					</div>

					<div className='stat'>
						<div className='stat-title'>Expense</div>
						<div className='stat-value'>{expense}</div>
						<div className='stat-desc'>↗︎ 400 (22%)</div>
					</div>

					<div className='stat'>
						<div className='stat-title'>Transactions Count</div>
						<div className='stat-value'>{transactions}</div>
						<div className='stat-desc'>↘︎ 90 (14%)</div>
					</div>
					<div className='stat'>
						<div className='stat-title'>Between Amount</div>
						<div className='stat-value'>{income - Math.abs(expense)}</div>
						<div className='stat-desc'>↘︎ 90 (14%)</div>
					</div>
				</div>
			</div>
		</div>
	)
}
