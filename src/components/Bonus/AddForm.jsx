import { Field, Form, Formik } from 'formik'
import { useAddTodoMutation } from '../../redux/todoApi'

export const AddForm = () => {
	const [addTodo] = useAddTodoMutation()

	const handleSubmit = (values, options) => {
		addTodo({ todo: values.todo })
		options.resetForm()
	}

	return (
		<div className='flex bg-slate-200  justify-center items-center gap-2 mb-4 py-4 relative'>
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
