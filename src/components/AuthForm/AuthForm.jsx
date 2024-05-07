import { Field, Form, Formik } from 'formik'
import { useUser } from '../../store/hooks'

export const AuthForm = () => {
	const { login } = useUser()
	const handleSubmit = values => {
		login(values.name)
	}
	return (
		<div className='flex justify-center min-h-screen items-center'>
			<Formik initialValues={{ name: '' }} onSubmit={handleSubmit}>
				<Form className='flex flex-col gap-2'>
					<Field placeholder='Enter username...' className='input' name='name' />
					<button className='btn btn-primary' type='submit'>
						Login
					</button>
				</Form>
			</Formik>
		</div>
	)
}
