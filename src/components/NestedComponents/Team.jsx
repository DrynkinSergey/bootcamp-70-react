import { useNavigate } from 'react-router-dom'

const Team = () => {
	const navigate = useNavigate()
	return (
		<div>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime officiis earum quasi molestiae magnam, voluptatum
			explicabo rem quos pariatur, dolorum ad dignissimos dicta est aliquid ipsa consequuntur, maiores architecto
			expedita!
			<button onClick={() => navigate('/', { replace: true })} className='btn btn-primary'>
				Home
			</button>
			<button onClick={() => navigate('/about')} className='btn btn-primary'>
				About
			</button>
			<button onClick={() => navigate('/users')} className='btn btn-primary'>
				Users
			</button>
		</div>
	)
}

export default Team
