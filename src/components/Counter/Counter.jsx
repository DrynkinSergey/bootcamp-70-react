import { useEffect, useState } from 'react'
import s from './Counter.module.css'

export const Counter = () => {
	const [step, setStep] = useState(1)
	const [count, setCount] = useState(() => {
		const savedCount = window.localStorage.getItem('counter')
		if (savedCount !== null) {
			return JSON.parse(savedCount)
		}
		console.log('Повідомлення буде виведено тільки якщо в ls пустота')
		return 0
	})

	// Буде викликано лише один раз!
	useEffect(() => {
		console.log('Hello COUNTER')
	}, [])

	// Запис данних в локал сторейдж
	useEffect(() => {
		window.localStorage.setItem('counter', count)
	}, [count])

	// Буде викликано при зміні count а також при першому рендері
	useEffect(() => {
		console.log('Counter is changed', count)
	}, [count])

	// Буде викликано при зміні step а також при першому рендері
	useEffect(() => {
		console.log('Step is changed', step)
	}, [step])

	// Буде викликано кожен раз при зміні лічильника АБО кроку а також перший раз
	useEffect(() => {
		console.log('Змінено лічильник або крок', count, step)
	}, [count, step])

	useEffect(() => {
		if (count === 5) {
			alert('Ви досягли 5')
		}
		if (count === -3) {
			setCount(0)
		}
	}, [count])

	const handleIncrement = () => {
		setCount(prev => prev + step)
	}
	const handleDecrement = () => {
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
