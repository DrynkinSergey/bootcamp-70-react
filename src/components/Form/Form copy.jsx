import { useState } from 'react'
import Button from './../Button/Button'
export const Form = ({ register }) => {
	const [username, setUserName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const handleSubmit = e => {
		e.preventDefault()
		register({ username, email, password })

		setUserName('')
		setEmail('')
		setPassword('')
	}

	return (
		<div className='formWrapper'>
			<form className='form' onSubmit={handleSubmit}>
				<label className='label' htmlFor='nameID'>
					<span>Name:</span>
					<input
						onChange={e => setUserName(e.target.value)}
						className='input'
						id='nameID'
						placeholder='Enter your name...'
						name='username'
					/>
				</label>
				<label className='label' htmlFor='emailID'>
					<span>Email:</span>
					<input
						onChange={e => setEmail(e.target.value)}
						className='input'
						id='emailID'
						placeholder='Enter your email... '
						name='email'
					/>
				</label>
				<label className='label' htmlFor='passID'>
					<span>Password:</span>
					<input
						onChange={e => setPassword(e.target.value)}
						className='input'
						id='passID'
						placeholder='Enter your password... '
						name='password'
					/>
				</label>
				<Button>Register</Button>
			</form>
		</div>
	)
}
