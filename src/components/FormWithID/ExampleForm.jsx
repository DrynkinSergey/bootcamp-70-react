import { useState } from 'react'
import { CustomInput } from './CustomInput'
import Button from './../Button/Button'

export const ExampleForm = () => {
	const [fieldCounter, setFieldCounter] = useState(2)
	return (
		<>
			<Button onClick={() => setFieldCounter(prev => prev + 1)}>Add field</Button>
			<div className='formExample'>
				{Array(fieldCounter)
					.fill('')
					.map((_, idx) => (
						<CustomInput key={idx} />
					))}
			</div>
		</>
	)
}
