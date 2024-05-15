import { Field, Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { selectExpense, selectIncome } from '../redux/catsSlice'
import ReactDatePicker from 'react-datepicker'
import { useState } from 'react'
import { addTransaction } from '../redux/transactionsSlice'
import { nanoid } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

export const AddForm = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const income = useSelector(selectIncome)
	const expense = useSelector(selectExpense)
	const [startDate, setStartDate] = useState(new Date())

	const initialValues = {
		sum: '',
		type: 'Expense',
		category: '',
		comment: '',
	}

	const handleSubmit = data => {
		const sum = data.type === 'Income' ? +data.sum : -data.sum
		dispatch(addTransaction({ id: nanoid(), ...data, date: startDate, sum }))
		navigate('/')
	}

	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			{({ values }) => (
				<Form className='card-body w-1/2 mx-auto py-2'>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Sum</span>
						</label>
						<Field
							type='number'
							placeholder='Enter sum of transaction..'
							name='sum'
							className='input input-bordered'
							required
						/>
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Type</span>
						</label>
						<Field as='select' name='type' className='input input-bordered'>
							<option value='Expense'>Expense</option>
							<option value='Income'>Income</option>
						</Field>
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Category</span>
						</label>
						<div className='w-full flex gap-1'>
							<Field as='select' name='category' className='input w-full input-bordered'>
								<option value=''>Select Category</option>
								{(values.type === 'Expense' ? expense : income).map(cat => (
									<option key={cat} value={cat}>
										{cat}
									</option>
								))}
							</Field>
							<button type='button' className='btn btn-primary'>
								+
							</button>
						</div>
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Date</span>
						</label>
						<ReactDatePicker
							selected={startDate}
							onChange={date => setStartDate(date)}
							className='input input-bordered w-full'
						/>
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Comment</span>
						</label>
						<Field
							type='text'
							placeholder='Enter comment for transaction...'
							name='comment'
							className='input input-bordered'
							required
						/>
					</div>
					<div className='form-control mt-6 flex flex-col gap-2'>
						<button type='submit' className='btn btn-primary'>
							Create transaction
						</button>
						<button onClick={() => navigate('/')} type='button' className='btn btn-error'>
							Cancel
						</button>
					</div>
				</Form>
			)}
		</Formik>
	)
}
