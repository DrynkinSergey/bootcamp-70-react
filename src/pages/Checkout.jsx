import { Field, Form, Formik } from 'formik'
import { useAuth, usePages, usePizza } from '../store/hooks'
import moment from 'moment'
import { checkout } from '../services/api'
import { toast } from 'react-toastify'

export const Checkout = () => {
	const { cart, resetCart } = usePizza()
	const { user } = useAuth()
	const { setPage } = usePages()

	const initialValues = {
		name: '',
		email: user.email,
		phone: '',
		address: '',
		summary: '',
		check: false,
	}
	const handleSubmit = values => {
		console.log({ ...values, cart, createdAt: moment().format('YYYY-MM-DD HH:mm:ss'), status: 'wait' })
		checkout({ ...values, cart, createdAt: moment().format('YYYY-MM-DD HH:mm:ss'), status: 'wait' }).then(() => {
			toast.success('Ваше замовлення прийнято!')
			resetCart()
			setTimeout(() => {
				setPage('pizzas')
			}, 2000)
		})
	}
	return (
		<div className='grid gap-4 grid-cols-2 p-10'>
			<div className='flex flex-col justify-center gap-4 border-4 shadow-lg p-4'>
				<Formik initialValues={initialValues} onSubmit={handleSubmit}>
					<Form className='flex flex-col p-4 gap-4'>
						<Field name='name' placeholder='Enter your name' className='input border-2 border-black' />
						<Field name='email' placeholder='Enter your email ' className='input border-2 border-black' />
						<Field name='phone' placeholder='Enter your phone ' className='input border-2 border-black' />
						<Field name='address' placeholder='Enter your address' className='input border-2 border-black' />
						<Field
							as='textarea'
							name='summary'
							placeholder='Enter your summary'
							className='input border-2 border-black'
						/>
						<div>
							<Field name='check' type='checkbox' />Я прочитав і погоджуюсь з замовленням!
						</div>
						<button className='btn btn-success' type='submit'>
							Зробити замовлення
						</button>
						<button type='button' onClick={() => setPage('cart')} className='btn btn-primary'>
							Повернутись до корзини
						</button>
					</Form>
				</Formik>
			</div>
			<div className='flex flex-col  gap-4 border-4 shadow-lg p-4'>
				{cart.map(item => (
					<li className='list-none flex justify-between' key={item.id}>
						<p>{item.title}</p>
						<p>{item.quantity}</p>
						<p>{item.price} грн.</p>
					</li>
				))}
			</div>
		</div>
	)
}
