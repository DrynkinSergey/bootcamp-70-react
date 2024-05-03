import { Field, Form, Formik } from 'formik'
import Button from '../Button/Button'

export const PetFormFormik = () => {
	const initialValue = {
		name: '',
		email: '',
		age: '',
		gender: 'Хлопчик',
		owner: '',
		phone: '',
		service: '',
		anotherService: '',
	}
	const handleSubmit = (values, options) => {
		console.log(values)
		options.resetForm()
	}
	return (
		<div className='formWrapper'>
			<Formik onSubmit={handleSubmit} initialValues={initialValue}>
				<Form className='form'>
					<label className='label'>
						<span>Ім'я тварини</span>
						<Field type='text' placeholder="Введіть ім'я тварини" className='input' name='name' />
					</label>
					<label className='label'>
						<span>Власник</span>
						<Field type='text' placeholder='Власник ФІО' className='input' name='owner' />
					</label>
					<label className='label'>
						<span>Емейл власника</span>
						<Field type='text' placeholder='Емейл власника' className='input' name='email' />
					</label>
					<label className='label'>
						<span>Телефон власника</span>
						<Field type='text' placeholder='Телефон власника' className='input' name='phone' />
					</label>
					<label className='label'>
						<span>Вік тварини</span>
						<Field type='text' placeholder='Вік тварини ' className='input' name='age' />
					</label>
					<label className='label'>
						<span>Вид послуги</span>
						<Field as='select' className='input' name='service'>
							<option value='Підстригти нігті'>Підстригти нігті</option>
							<option value='Грумінг'>Грумінг</option>
							<option value='Вигуляти'>Вигуляти</option>
							<option value='Інші послуги'>Інші послуги</option>
						</Field>
					</label>
					<label className='label'>
						<span>Опишіть послугу</span>
						<Field as='textarea' placeholder='Дайте описання іншої послуги' className='input' name='anotherService' />
					</label>
					<label>
						<Field type='radio' value='Хлопчик' name='gender' /> Хлопчик
					</label>
					<label>
						<Field type='radio' value='Дівчинка' name='gender' /> Дівчинка
					</label>
					<Button type='submit'>Відправити</Button>
				</Form>
			</Formik>
		</div>
	)
}

{
	/* <Formik>
	<Form>
		<Field />
		<Button></Button>
	</Form>
</Formik> */
}
