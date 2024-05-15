import { Link } from 'react-router-dom'

export const NotFound = () => {
	return (
		<div
			className='hero min-h-screen'
			style={{ backgroundImage: 'url(https://yoast.com/app/uploads/2016/10/404_error_checking_FI.jpg)' }}
		>
			<div className='hero-overlay bg-opacity-60'></div>
			<div className='hero-content text-center text-neutral-content'>
				<div className='max-w-md backdrop-blur-[10px] border-2 rounded-md p-10 shadow-xl border-slate-500'>
					<h1 className='mb-5 text-5xl font-bold'>Sorry...</h1>
					<p className='mb-5'>Sorry, we couldn&apos;t find that page. You can always go back to the home page.</p>
					<Link to='/' className='btn btn-primary'>
						Go home
					</Link>
				</div>
			</div>
		</div>
	)
}
