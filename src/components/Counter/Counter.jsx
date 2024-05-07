import { useEffect, useRef, useState } from 'react'
import { render } from 'react-dom'

export const Counter = () => {
	const [counter, setCounter] = useState(1)
	const handleIncrement = () => {
		setCounter(prev => prev + 1)
	}

	const handleDecrement = () => {
		setCounter(prev => prev - 1)
	}
	const handleReset = () => {
		setCounter(0)
	}

	const minusRef = useRef()
	const myRef = useRef()
	const renderCounter = useRef(0)
	useEffect(() => {
		myRef.current.focus()
		myRef.current.innerHTML = 'HELLO WORLD'
		// setInterval(() => {
		// 	myRef.current.click()
		// }, 1000)
	}, [])

	// console.log('RENDER')
	useEffect(() => {
		renderCounter.current++
		console.log(renderCounter.current)
		// setRenderCounter2(prev => prev + 1)
		// console.log(renderCounter2)
	})
	return (
		<div className='min-h-screen flex justify-center items-center'>
			<div className='border-2 border-black p-10 rounded-md flex flex-col gap-2'>
				<h2 className='text-5xl text-center font-bold'>{counter}</h2>
				<div className='flex gap-2 '>
					<button ref={minusRef} onClick={handleDecrement} className='btn btn-outline btn-primary text-4xl'>
						Minus
					</button>
					<button onClick={handleReset} className='btn btn-outline btn-primary text-4xl'>
						Reset
					</button>

					<button id='btn' ref={myRef} onClick={handleIncrement} className='btn btn-outline btn-primary text-4xl'>
						Plus
					</button>
				</div>
				<button onClick={() => renderCounter.current++} id='btn' className='btn btn-outline btn-primary text-4xl'>
					REF BTN
				</button>
			</div>
		</div>
	)
}
