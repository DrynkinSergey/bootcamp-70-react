import Button from './../Button/Button'
export const Form = ({ register }) => {
	const handleSubmit = e => {
		e.preventDefault()
	}

	return (
		<div className='formWrapper'>
			<form className='form' onSubmit={handleSubmit}>
				<label className='label' htmlFor='nameID'>
					<span>Name:</span>
					<input className='input' id='nameID' placeholder='Enter your name...' name='username' />
				</label>
				<label className='label' htmlFor='emailID'>
					<span>Email:</span>
					<input className='input' id='emailID' placeholder='Enter your email... ' name='email' />
				</label>
				<label className='label' htmlFor='passID'>
					<span>Password:</span>
					<input className='input' id='passID' placeholder='Enter your password... ' name='password' />
				</label>
				<Button>Register</Button>
			</form>
		</div>
	)
}
