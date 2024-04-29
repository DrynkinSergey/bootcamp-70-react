import { useState } from 'react'
import Button from './Button/Button'

const Vote = () => {
	const [options, setOptions] = useState({
		windows: 0,
		mac: 0,
		linux: 0,
	})
	return (
		<div>
			<h1>Vote</h1>
			<p>Windows: {options.windows}</p>
			<p>Mac: {options.mac}</p>
			<p>Linux: {options.linux}</p>
			<div>
				<Button onClick={() => setOptions(prev => ({ ...prev, windows: prev.windows + 1 }))}>windows</Button>
				<Button onClick={() => setOptions(prev => ({ ...prev, mac: prev.mac + 1 }))}>mac</Button>
				<Button onClick={() => setOptions(prev => ({ ...prev, linux: prev.linux + 1 }))}>linux</Button>
			</div>
		</div>
	)
}

export default Vote
