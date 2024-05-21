import { Field, Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsLoading } from '../../redux/todolist/slice'
import { Loader } from '../Loader'
import { addTodoThunk } from '../../redux/todolist/operations'

export const AddForm = () => {
	const dispatch = useDispatch()
	const handleSubmit = (values, options) => {
		dispatch(addTodoThunk(values))
		options.resetForm()
	}
	const isLoading = useSelector(selectIsLoading)
	return (
		<div className='flex bg-slate-200  justify-center items-center gap-2 mb-4 py-4 relative'>
			{isLoading && <Loader />}
			<Formik initialValues={{ text: '' }} onSubmit={handleSubmit}>
				<Form className='flex gap-2'>
					<Field className='input' name='text' placeholder='Enter new todo...' />
					<button type='submit' className='btn btn-primary'>
						Add todo
					</button>
				</Form>
			</Formik>
		</div>
	)
}
