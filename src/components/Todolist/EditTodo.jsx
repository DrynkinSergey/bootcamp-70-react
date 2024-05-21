import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { editTodoThunk } from '../../redux/todolist/operations'

export const EditTodo = ({ todo, close }) => {
	const dispatch = useDispatch()
	const { register, handleSubmit } = useForm({ defaultValues: todo })
	const submit = data => {
		dispatch(editTodoThunk(data))
		close()
	}
	return (
		<div>
			<form className='flex flex-col gap-4 py-10 px-4' onSubmit={handleSubmit(submit)}>
				<input
					{...register('text')}
					type='text'
					placeholder='Enter new todo'
					className='input input-bordered input-info w-full '
				/>
				<label className='label cursor-pointer'>
					<span className='label-text'>Set as completed</span>
					<input type='checkbox' className='checkbox checkbox-primary' {...register('completed')} />
				</label>
				<label className='label cursor-pointer'>
					<span className='label-text'>Set as liked</span>
					<input type='checkbox' className='checkbox checkbox-primary' {...register('liked')} />
				</label>
				<button className='btn btn-primary'>Save</button>
			</form>
		</div>
	)
}
