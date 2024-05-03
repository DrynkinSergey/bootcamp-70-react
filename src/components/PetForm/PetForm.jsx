import { useState } from 'react'
import Button from './../Button/Button'

export const PetForm = () => {
	const [name, setName] = useState('')
	const [owner, setOwner] = useState('')
	const [email, setEmail] = useState('')
	const [age, setAge] = useState('')
	const [phone, setPhone] = useState('')
	const [gender, setGender] = useState('Хлопчик')

	const handleSubmit = e => {
		e.preventDefault()
		console.log('Form submitted')
		console.log({ name, owner, email, age, gender, phone })
		setName('')
		setOwner('')
		setEmail('')
		setPhone('')
		setAge('')
		setGender('Хлопчик')
	}
	return (
		<div className='formWrapper'>
			<form onSubmit={handleSubmit} className='form'>
				<label className='label'>
					<span>Ім'я тварини</span>
					<input
						type='text'
						placeholder="Введіть ім'я тварини"
						className='input'
						value={name}
						onChange={e => setName(e.target.value)}
					/>
				</label>
				<label className='label'>
					<span>Власник</span>
					<input
						type='text'
						placeholder='Власник ФІО'
						className='input'
						value={owner}
						onChange={e => setOwner(e.target.value)}
					/>
				</label>
				<label className='label'>
					<span>Емейл власника</span>
					<input
						type='text'
						placeholder='Емейл власника'
						className='input'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</label>
				<label className='label'>
					<span>Телефон власника</span>
					<input
						type='text'
						placeholder='Телефон власника'
						className='input'
						value={phone}
						onChange={e => setPhone(e.target.value)}
					/>
				</label>
				<label className='label'>
					<span>Вік тварини</span>
					<input
						type='text'
						placeholder='Вік тварини '
						className='input'
						value={age}
						onChange={e => setAge(e.target.value)}
					/>
				</label>
				<label>
					<input
						type='radio'
						value='Хлопчик'
						checked={gender === 'Хлопчик'}
						name='gender'
						onChange={e => setGender(e.target.value)}
					/>{' '}
					Хлопчик
				</label>
				<label>
					<input
						type='radio'
						value='Дівчинка'
						checked={gender === 'Дівчинка'}
						name='gender'
						onChange={e => setGender(e.target.value)}
					/>{' '}
					Дівчинка
				</label>
				<Button>Відправити</Button>
			</form>
		</div>
	)
}
