import { Field, Form, Formik } from 'formik'
import { useAuth } from '../store/hooks'
import { toast } from 'react-toastify'

export const Login = () => {
	const { login } = useAuth()
	const initialValues = {
		email: 'admin@mail.com',
		password: 'admin',
	}

	const handleSubmit = values => {
		if (values.email === 'admin@mail.com' && values.password === 'admin') {
			return login(values)
		}
		toast.error('Invalid data, try anther!')
	}
	return (
		<div>
			<div className='hero min-h-screen bg-base-200'>
				<div className='hero-content flex-col lg:flex-row-reverse'>
					<div className='text-center lg:text-left'>
						<h1 className='text-5xl font-bold'>Login now!</h1>
						<p className='py-6'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in cupiditate modi iste eligendi dolor
							atque voluptate corrupti? Fugiat eveniet ex perferendis cumque, quibusdam dolorem dicta dignissimos
							corporis modi magnam!
						</p>
					</div>
					<div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
						<Formik initialValues={initialValues} onSubmit={handleSubmit}>
							<Form className='card-body'>
								<div className='form-control'>
									<label className='label'>
										<span className='label-text'>Email</span>
									</label>
									<Field name='email' type='email' placeholder='email' className='input input-bordered' required />
								</div>
								<div className='form-control'>
									<label className='label'>
										<span className='label-text'>Password</span>
									</label>
									<Field
										name='password'
										type='password'
										placeholder='password'
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
		</div>
	)
}
