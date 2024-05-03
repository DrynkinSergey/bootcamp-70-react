import { useState } from 'react'
import Button from '../Button/Button'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { petFormSchemaRHF } from './schemas'

export const PetFormRHF = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(petFormSchemaRHF),
	})

	const onSubmit = data => {
		console.log(data)
		reset()
	}
	return (
		<div className='formWrapper'>
			<form onSubmit={handleSubmit(onSubmit)} className='form'>
				<label className='label'>
					<span>Ім'я тварини</span>
					<input {...register('name')} type='text' placeholder="Введіть ім'я тварини" className='input' />
					{errors.name && <p className='error'>{errors.name.message}</p>}
				</label>
				<label className='label'>
					<span>Власник</span>
					<input {...register('owner')} type='text' placeholder='Власник ФІО' className='input' />
					{errors.owner && <p className='error'>{errors.owner.message}</p>}
				</label>
				<label className='label'>
					<span>Емейл власника</span>
					<input {...register('email')} type='text' placeholder='Емейл власника' className='input' />
					{errors.email && <p className='error'>{errors.email.message}</p>}
				</label>
				<label className='label'>
					<span>Телефон власника</span>
					<input {...register('phone')} type='text' placeholder='Телефон власника' className='input' />
					{errors.phone && <p className='error'>{errors.phone.message}</p>}
				</label>
				<label className='label'>
					<span>Вік тварини</span>
					<input {...register('age')} type='text' placeholder='Вік тварини ' className='input' />
					{errors.age && <p className='error'>{errors.age.message}</p>}
				</label>
				<div className='label'>
					<label>
						<input {...register('gender')} type='radio' value='Хлопчик' /> Хлопчик
					</label>
					<label>
						<input {...register('gender')} type='radio' value='Дівчинка' /> Дівчинка
					</label>
					{errors.gender && <p className='error'>{errors.gender.message}</p>}
				</div>
				<Button>Відправити</Button>
			</form>
		</div>
	)
}
