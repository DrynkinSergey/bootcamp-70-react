import { Field, Form, Formik } from 'formik'
import Button from '../Button/Button'
import { InputField } from './InputField'
import { OtherField } from './OtherField'

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
	const options = ['Підстригти нігті', 'Грумінг', 'Вигуляти', 'Інші послуги']
	const countries = ['Україна', 'Німеччина', 'Польша', 'Молдова', 'Інші країни']
	const typesService = ['Все включено', 'Економ', 'Про', 'На ваш розсуд']
	return (
		<div className='formWrapper'>
			<Formik onSubmit={handleSubmit} initialValues={initialValue}>
				<Form className='form'>
					<InputField label='Ім’я тварини' name='name' placeholder='Ім’я тварини' />
					<InputField label='Власник' name='owner' placeholder='Власник ФІО' />
					<InputField label='Емейл власника' name='email' placeholder='Емейл власника' />
					<InputField label='Телефон власника' name='phone' placeholder='Телефон власника' />
					<InputField label='Вік тварини' name='age' placeholder='Вік тварини' />
					<OtherField options={options} type='select' label='Виберіть послугу' name='service' />
					<OtherField options={typesService} type='select' label='Вид абоніменту' name='typeService' />
					<OtherField options={countries} type='select' label='Виберіть країну' name='country' />
					<OtherField
						type='textarea'
						label='Опишіть послугу'
						name='anotherService'
						placeholder='Дайте описання іншої послуги'
					/>
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
