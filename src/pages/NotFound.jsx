import { Link } from 'react-router-dom'

export const NotFound = () => {
	return (
		<div className='min-h-screen flex items-center justify-center flex-col text-4xl'>
			<img
				src='https://www.artzstudio.com/content/images/wordpress/2020/05/404-error-not-found-page-lost.png'
				width={1000}
			/>
			<Link to='/'>Home</Link>
		</div>
	)
}
