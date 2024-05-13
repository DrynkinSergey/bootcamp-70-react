import { useDispatch, useSelector } from 'react-redux'
import s from './Counter.module.css'
export const Counter = () => {
	// Забираємо дані з редаксу
	const counter = useSelector(state => state.count)

	// Може відправляти екшени в стор
	const dispatch = useDispatch()

	const handleIncrement = () => {
		dispatch({ type: 'INCREMENT' })
	}

	const handleDecrement = () => {
		dispatch({ type: 'DECREMENT' })
	}

	const reset = () => {
		dispatch({ type: 'RESET' })
	}
	return (
		<div className={s.flexContainer}>
			<div className={s.wrapper}>
				<h1 className='text-4xl font-bold mb-4 text-white'>{counter}</h1>
				<input />
				<div className={s.flex}>
					<button className='btn btn-primary' onClick={handleDecrement}>
						minus
					</button>
					<button className='btn btn-primary' onClick={reset}>
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
