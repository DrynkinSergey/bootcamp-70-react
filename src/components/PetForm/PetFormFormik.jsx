import { ErrorMessage, Field, Form, Formik } from 'formik'
import Button from '../Button/Button'
import { InputField } from './InputField'
import { OtherField } from './OtherField'
import { countries, initialValue, options, petFormSchema, typesService } from './schemas'

export const PetFormFormik = () => {
	const handleSubmit = (values, options) => {
		console.log(values)
		options.resetForm()
	}

	return (
		<div className='formWrapper'>
			<Formik
				onSubmit={handleSubmit}
				validationSchema={petFormSchema}
				initialValues={initialValue}
				// validateOnChange={false}
				// validateOnBlur={false}
			>
				<Form className='form'>
					<InputField label='Ім’я тварини' name='name' placeholder='Ім’я тварини' />
					<InputField type='password' label='Пароль' name='password' placeholder='Пароль' />
					<InputField
						type='password'
						label='Підтвердіть пароль'
						name='confirmPassword'
						placeholder='Підтвердіть пароль'
					/>
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
					<div className='label'>
						<label>
							<Field type='radio' value='Хлопчик' name='gender' /> Хлопчик
						</label>
						<label>
							<Field type='radio' value='Дівчинка' name='gender' /> Дівчинка
						</label>
						<ErrorMessage name='gender' component='span' className='error' />
					</div>

					<Button type='submit'>Відправити</Button>
				</Form>
			</Formik>
		</div>
	)
}
