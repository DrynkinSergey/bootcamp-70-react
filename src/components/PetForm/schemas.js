import * as Yup from 'yup'

export const initialValue = {
	name: '',
	email: '',
	age: '',
	gender: '',
	owner: '',
	phone: '',
	typeService: '',
	country: '',
	service: '',
	anotherService: '',
	password: '',
	confirmPassword: '',
}

export const options = ['Підстригти нігті', 'Грумінг', 'Вигуляти', 'Інші послуги']
export const countries = ['Україна', 'Німеччина', 'Польша', 'Молдова', 'Інші країни']
export const typesService = ['Все включено', 'Економ', 'Про', 'На ваш розсуд']

export const re =
	/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

export const petFormSchema = Yup.object().shape({
	name: Yup.string()
		.required("Ім'я тварини є обов'язковим!")
		.min(3, 'Має бути не менше 3-х символів')
		.max(20, 'Має бути не більше 20-ти символів')
		.trim('Не має містити пробілів'),
	owner: Yup.string().required("Власник тварини є обов'язковим!").min(3, 'Має бути не менше 3-х символів'),
	email: Yup.string().required('Email є обов’язковим').matches(re, 'Неправильний емейл'),
	phone: Yup.string().required('Номер телефону є обов’язковим').min(10, 'Має бути не менше 10-ти символів'),
	age: Yup.number()
		.required('Вік є обов’язковим')
		.positive('Вік має бути додатнім числом')
		.integer('Вік має бути цілим числом')
		.min(1, 'Вік має бути не менше 1-го року')
		.max(20, 'Вік має бути не більше 20-ти років'),
	service: Yup.string().oneOf(options, 'Виберіть послугу').required('Виберіть послугу'),
	typeService: Yup.string().oneOf(typesService, 'Виберіть послугу').required('Виберіть послугу'),
	country: Yup.string().oneOf(countries, 'Виберіть послугу').required('Виберіть послугу'),
	anotherService: Yup.string().required('Має бути обов’язковим').max(120, 'Має бути не більше 120-ти символів'),
	gender: Yup.string().required('Стать є обов’язковою').oneOf(['Хлопчик', 'Дівчинка'], 'Оберіть стать'),
	password: Yup.string()
		.min(6, 'Має бути не менше 6-ти символів')
		.max(20, 'Має бути не більше 20-ти символів')
		.required('Пароль є обов’язковим'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password')], 'Паролі не співпадають')
		.required('Підтвердіть пароль'),
})

export const petFormSchemaRHF = Yup.object().shape({
	name: Yup.string()
		.required("Ім'я тварини є обов'язковим!")
		.min(3, 'Має бути не менше 3-х символів')
		.max(20, 'Має бути не більше 20-ти символів')
		.trim('Не має містити пробілів'),
	owner: Yup.string().required("Власник тварини є обов'язковим!").min(3, 'Має бути не менше 3-х символів'),
	email: Yup.string().required('Email є обов’язковим').matches(re, 'Неправильний емейл'),
	phone: Yup.string().required('Номер телефону є обов’язковим').min(10, 'Має бути не менше 10-ти символів'),
	age: Yup.number()
		.required('Вік є обов’язковим')
		.positive('Вік має бути додатнім числом')
		.integer('Вік має бути цілим числом')
		.min(1, 'Вік має бути не менше 1-го року')
		.max(20, 'Вік має бути не більше 20-ти років'),
	gender: Yup.string().required('Стать є обов’язковою').oneOf(['Хлопчик', 'Дівчинка'], 'Оберіть стать'),
})
