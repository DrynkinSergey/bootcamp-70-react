import { useContext } from 'react'
import { AutoContext, ProfileContext } from './Test'
import { useUser } from '../../store/hooks'

export const C = ({ auto, model }) => {
	const { price, color, sayHi } = useContext(AutoContext)
	// const { user } = useContext(ProfileContext)
	const { user } = useUser()
	return (
		<div>
			<h1>Hello {user}!</h1>
			<h2>{auto}</h2>
			<h2>{model}</h2>
			<p>Price: {price}</p>
			<p>Color: {color}</p>
			<button className='btn btn-primary' onClick={() => sayHi('ANTONIO')}>
				Click
			</button>
		</div>
	)
}
