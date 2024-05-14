import { nanoid } from '@reduxjs/toolkit'
import { Field, Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/trello/slice'

export const AddTask = () => {
	const dispatch = useDispatch()
	const handleSubmit = (values, options) => {
		const newTask = {
			id: nanoid(),
			title: values.title,
			board: 1,
		}
		dispatch(addTask(newTask))
		options.resetForm()
	}
	return (
		<div className='flex bg-slate-200  justify-center items-center gap-2 mb-4 py-4'>
			<Formik initialValues={{ title: '' }} onSubmit={handleSubmit}>
				<Form className='flex gap-2'>
					<Field className='input' name='title' placeholder='Enter new task...' />
					<button type='submit' className='btn btn-primary'>
						Add task
					</button>
				</Form>
			</Formik>
		</div>
	)
}
