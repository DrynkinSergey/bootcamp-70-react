import Button from './../Button/Button'

export const PetForm = () => {
	return (
		<div className='formWrapper'>
			<form className='form'>
				<label className='label'>
					<span>Ім'я тварини</span>
					<input type='text' placeholder="Введіть ім'я тварини" className='input' />
				</label>
				<label className='label'>
					<span>Власник</span>
					<input type='text' placeholder='Власник ФІО' className='input' />
				</label>
				<label className='label'>
					<span>Емейл власника</span>
					<input type='text' placeholder='Емейл власника' className='input' />
				</label>
				<label className='label'>
					<span>Вік тварини</span>
					<input type='text' placeholder='Вік тварини ' className='input' />
				</label>
				<label>
					<input type='radio' value='Хлопчик' name='gender' /> Хлопчик
				</label>
				<label>
					<input type='radio' value='Дівчинка' name='gender' /> Дівчинка
				</label>
				<Button>Відправити</Button>
			</form>
		</div>
	)
}
