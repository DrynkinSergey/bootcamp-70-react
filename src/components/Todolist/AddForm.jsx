import { Field, Form, Formik } from 'formik'
import { useTodos } from '../../store/hooks'

export const AddForm = () => {
	const { addTodo } = useTodos()
	const handleSubmit = (values, options) => {
		addTodo(values.todo)
		options.resetForm()
	}
	return (
		<div className='flex justify-center items-center gap-2 mb-4 py-4'>
			<Formik initialValues={{ todo: '' }} onSubmit={handleSubmit}>
				<Form className='flex gap-2'>
					<Field className='input' name='todo' placeholder='Enter new todo...' />
					<button type='submit' className='btn btn-primary'>
						Add todo
					</button>
				</Form>
			</Formik>
		</div>
	)
}
