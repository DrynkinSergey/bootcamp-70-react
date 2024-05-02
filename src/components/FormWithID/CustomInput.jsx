import { useId } from 'react'

export const CustomInput = () => {
	const id = useId()
	return (
		<div>
			<label htmlFor={id}>Custom label</label>
			<input id={id} type='text' placeholder='Any input here...' />
		</div>
	)
}
