import { Field, Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { registerThunk } from '../redux/auth/operations'

export const Register = () => {
	const dispatch = useDispatch()
	const initialValues = {
		name: '',
		email: '',
		password: '',
	}
	const handleSubmit = values => {
		dispatch(registerThunk(values))
		console.log(values)
	}
	return (
		<div className='hero min-h-screen bg-base-200'>
			<div className='hero-content flex-col lg:flex-row-reverse'>
				<div className='text-center lg:text-left'>
					<h1 className='text-5xl font-bold'>Register now!</h1>
					<p className='py-6'>
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
						deleniti eaque aut repudiandae et a id nisi.
					</p>
				</div>
				<div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
					<Formik initialValues={initialValues} onSubmit={handleSubmit}>
						<Form className='card-body'>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Name</span>
								</label>
								<Field type='text' name='name' placeholder='name' className='input input-bordered' required />
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<Field type='email' name='email' placeholder='email' className='input input-bordered' required />
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Password</span>
								</label>
								<Field
									type='password'
									name='password'
									placeholder='password'
									className='input input-bordered'
									required
								/>
								<label className='label text-sm'>
									<Link to='/login'>Already have account? Lets login!</Link>
								</label>
							</div>
							<div className='form-control mt-6'>
								<button type='submit' className='btn btn-primary'>
									Register
								</button>
							</div>
						</Form>
					</Formik>
				</div>
			</div>
		</div>
	)
}
