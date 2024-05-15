import { Field, Form, Formik } from 'formik'
import { Link } from 'react-router-dom'

export const AuthForm = ({ type, initialValues, handleSubmit }) => {
	return (
		<div className='hero min-h-screen bg-base-200'>
			<div className='hero-content flex-col lg:flex-row-reverse'>
				<div className='text-center lg:text-left'>
					<h1 className='text-5xl font-bold'>{type === 'register' ? 'Register' : 'Login'}</h1>
					<p className='py-6'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab veniam dignissimos beatae iste qui, voluptatem
						officia dolor repellat, eius autem quam velit aliquam quasi pariatur! Expedita voluptates eveniet iure
						praesentium?
					</p>
				</div>
				<div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
					<Formik initialValues={initialValues} onSubmit={handleSubmit}>
						<Form className='card-body'>
							{type === 'register' && (
								<div className='form-control'>
									<label className='label'>
										<span className='label-text'>Name</span>
									</label>
									<Field
										type='text'
										placeholder='Enter the name...'
										name='name'
										className='input input-bordered'
										required
									/>
								</div>
							)}
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<Field type='email' placeholder='email' name='email' className='input input-bordered' required />
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
								<label className='label'>
									<Link to={type === 'register' ? '/login' : '/register'} className='text-sm '>
										{type === 'register' ? 'Already have an account?' : 'Don`t have an account?'}
									</Link>
								</label>
							</div>
							<div className='form-control mt-6'>
								<button type='submit' className='btn btn-primary'>
									{type === 'register' ? 'Register' : 'Login'}
								</button>
							</div>
						</Form>
					</Formik>
				</div>
			</div>
		</div>
	)
}
