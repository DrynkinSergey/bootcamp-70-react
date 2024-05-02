import { useState } from 'react'
import Button from './../Button/Button'
export const Form = ({ register }) => {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		age: 0,
		children: 0,
		country: 'Ukraine',
		terms: false,
		gender: 'female',
	})

	const handleSubmit = e => {
		e.preventDefault()
		register(formData)
		setFormData({
			username: '',
			email: '',
			password: '',
			age: 0,
			children: 0,
			country: 'Ukraine',
			terms: false,
			gender: 'female',
		})
	}

	// DRY - Don't Repeat Yourself
	// const handleChangeName = e => {
	// 	setFormData({ ...formData, username: e.target.value })
	// }
	// const handleChangeEmail = e => {
	// 	setFormData({ ...formData, email: e.target.value })
	// }
	// const handleChangePassword = e => {
	// 	setFormData({ ...formData, password: e.target.value })
	// }
	// const user = {
	// 	username: 'Vasya',
	// 	email: 'XwLQK@example.com',
	// 	job: {
	// 		title: 'Programmer',
	// 		company: 'Google',
	// 		salary: 10000,
	// 	},
	// 	address: {
	// 		city: 'Lviv',
	// 		street: 'Shevchenka',
	// 		house: 1,
	// 	},
	// }
	// const { address, ...data } = user
	// console.log('address', address)
	// console.log('Rest', data)

	// const fruits = ['apple', 'banana', 'cherry']

	// const [firtsFruit, ...other] = fruits
	// console.log(firtsFruit, other)

	const handleChangeInput = e => {
		const { name, value, checked } = e.target
		console.log(name, value)

		// 1. If - Else
		// if (name === 'username') {
		// 	setFormData({ ...formData, username: value })
		// }
		// if (name === 'email') {
		// 	setFormData({ ...formData, email: value })
		// }
		// if (name === 'password') {
		// 	setFormData({ ...formData, password: value })
		// }

		// 2. Switch Case
		// switch (name) {
		// 	case 'username':
		// 		setFormData({ ...formData, username: value })
		// 		break
		// 	case 'email':
		// 		setFormData({ ...formData, email: value })
		// 		break
		// 	case 'age':
		// 		setFormData({ ...formData, age: value })
		// 		break
		// 	case 'password':
		// 		setFormData({ ...formData, password: value })
		// }

		// 3. Dynamic
		if (name === 'terms') {
			return setFormData({ ...formData, terms: !formData.terms })
		}
		// не піде далі після чекбоксу
		setFormData({ ...formData, [name]: value })
	}

	return (
		<div className='formWrapper'>
			<form className='form' onSubmit={handleSubmit}>
				<label className='label' htmlFor='nameID'>
					<span>Name:</span>
					<input
						value={formData.username}
						className='input'
						onChange={handleChangeInput}
						id='nameID'
						placeholder='Enter your name...'
						name='username'
					/>
				</label>
				<label className='label' htmlFor='emailID'>
					<span>Email:</span>
					<input
						value={formData.email}
						className='input'
						id='emailID'
						onChange={handleChangeInput}
						placeholder='Enter your email... '
						name='email'
					/>
				</label>
				<label className='label' htmlFor='passID'>
					<span>Password:</span>
					<input
						value={formData.password}
						className='input'
						onChange={handleChangeInput}
						id='passID'
						placeholder='Enter your password... '
						name='password'
					/>
				</label>
				<label className='label' htmlFor='passID'>
					<span>Age:</span>
					<input
						value={formData.age}
						className='input'
						onChange={handleChangeInput}
						id='passID'
						placeholder='Enter your age... '
						name='age'
					/>
				</label>
				<label className='label' htmlFor='passID'>
					<span>Children:</span>
					<input
						value={formData.children}
						className='input'
						onChange={handleChangeInput}
						id='passID'
						placeholder='Enter your count of children... '
						name='children'
					/>
				</label>
				<label className='label' htmlFor='passID'>
					<span>Country:</span>
					<select
						value={formData.country}
						className='input'
						onChange={handleChangeInput}
						id='passID'
						placeholder='Enter your count of children... '
						name='country'
					>
						<option value='Ukraine'>Ukraine</option>
						<option value='Poland'>Poland</option>
						<option value='USA'>USA</option>
					</select>
				</label>

				<div>
					<label>
						<input
							value='male'
							type='radio'
							checked={formData.gender === 'male'}
							onChange={handleChangeInput}
							name='gender'
						/>
						<span>Male</span>
					</label>
				</div>
				<div>
					<label>
						<input
							value='female'
							type='radio'
							checked={formData.gender === 'female'}
							onChange={handleChangeInput}
							name='gender'
						/>
						<span>Female</span>
					</label>
				</div>
				<div>
					<label>
						<input
							value='unicorn'
							type='radio'
							checked={formData.gender === 'unicorn'}
							onChange={handleChangeInput}
							name='gender'
						/>
						<span>Unicorn</span>
					</label>
				</div>

				<div>
					<input
						checked={formData.terms}
						className='input'
						onChange={handleChangeInput}
						id='passID'
						type='checkbox'
						name='terms'
					/>
					<span> I am confirm that i read the terms</span>
				</div>
				<Button>Register</Button>
			</form>
		</div>
	)
}
