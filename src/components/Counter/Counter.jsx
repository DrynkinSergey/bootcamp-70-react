import { useDispatch, useSelector } from 'react-redux'
import s from './Counter.module.css'
import { changeStep, decrement, increment, reset } from '../../redux/counter/actions'
import { selectCounter, selectStep } from '../../redux/counter/selectors'
import { useEffect } from 'react'
export const Counter = () => {
	// Забираємо дані з редаксу
	const counter = useSelector(selectCounter)
	const step = useSelector(selectStep)
	const dispatch = useDispatch()

	// useEffect(() => {
	// 	setInterval(() => {
	// 		dispatch(increment())
	// 	}, 1000)
	// }, [dispatch])
	// Може відправляти екшени в стор

	const handleIncrement = () => {
		dispatch(increment())
	}

	const handleDecrement = () => {
		dispatch(decrement())
	}

	const handleReset = () => {
		dispatch(reset())
	}

	const handleChange = e => {
		dispatch(changeStep(+e.target.value))
	}
	return (
		<div className={s.flexContainer}>
			<div className={s.wrapper}>
				<h1 className='text-4xl font-bold mb-4 text-white'>{counter}</h1>
				<input value={step} onChange={handleChange} />
				<div className={s.flex}>
					<button className='btn btn-primary' onClick={handleDecrement}>
						minus
					</button>
					<button className='btn btn-primary' onClick={handleReset}>
						reset
					</button>
					<button className='btn btn-primary' onClick={handleIncrement}>
						plus
					</button>
				</div>
			</div>
		</div>
	)
}
