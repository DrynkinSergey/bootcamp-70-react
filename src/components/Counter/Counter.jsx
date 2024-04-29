import s from './Counter.module.css'

export const Counter = () => {
	const handleResetClick = e => {
		// alert('CLick is done')
		console.log(e)
		console.log(e.target.innerHTML)
		e.target.innerHTML = 'Badabum'
	}
	const handlePlusClick = name => {
		console.log(`Welcome to REACT, ${name}`)
	}

	return (
		<div className={s.flexContainer}>
			<div className={s.wrapper}>
				<h1>{1}</h1>

				<input />
				<div className={s.flex}>
					<button className='btn' onClick={() => console.log('Hello')}>
						minus
					</button>
					<button className='btn' onClick={handleResetClick}>
						reset
					</button>
					<button className='btn' onClick={() => handlePlusClick('Stepan')}>
						plus
					</button>
				</div>
			</div>
		</div>
	)
}
