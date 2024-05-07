import { Field, Form, Formik } from 'formik'
import { useAuth } from '../../store/hooks'

export const Login = () => {
	const { login } = useAuth()
	const handleSubmit = (values, options) => {
		console.log(values)
		login(values)
	}
	return (
		<div className='hero min-h-screen bg-base-200'>
			<div className='hero-content flex-col lg:flex-row-reverse'>
				<div className='text-center lg:text-left'>
					<h1 className='text-5xl font-bold'>Login now!</h1>
					<p className='py-6'>Welcome to our Pizza Code! Login to use our app.</p>
				</div>
				<div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
					<Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
						<Form className='card-body'>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<Field name='email' placeholder='email' className='input input-bordered' required />
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Password</span>
								</label>
								<Field
									type='password'
									placeholder='password'
									name='password'
									className='input input-bordered'
									required
								/>
							</div>
							<div className='form-control mt-6'>
								<button type='submit' className='btn btn-primary'>
									Login
								</button>
							</div>
						</Form>
					</Formik>
				</div>
			</div>
		</div>
	)
}
