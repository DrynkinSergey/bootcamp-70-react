import { Link } from 'react-router-dom'

export const NotFound = () => {
	return (
		<div className='flex flex-col text-5xl justify-center items-center min-h-screen'>
			<h1>Page not found</h1>
			<Link to='/'>Home</Link>
		</div>
	)
}
