import { useState } from 'react'
import s from './Counter.module.css'

export const Counter = () => {
	const [count, setCount] = useState(0)
	const [step, setStep] = useState(1)

	const handleIncrement = () => {
		setCount(prev => prev + step)
	}
	const handleDecrement = () => {
		if (count <= 0) {
			return
		}
		setCount(prev => prev - step)
	}
	const handleReset = () => {
		setCount(0)
		setStep(1)
	}
	return (
		<div className={s.flexContainer}>
			<div className={s.wrapper}>
				<h1>{count}</h1>

				<input value={step} onChange={e => setStep(+e.target.value)} />
				<div className={s.flex}>
					<button className='btn' onClick={handleDecrement}>
						minus
					</button>
					<button className='btn' onClick={handleReset}>
						reset
					</button>
					<button className='btn' onClick={handleIncrement}>
						plus
					</button>
				</div>
			</div>
		</div>
	)
}
