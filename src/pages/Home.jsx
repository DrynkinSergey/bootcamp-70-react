import { usePages } from '../store/hooks'

export const Home = () => {
	const { setPage } = usePages()
	return (
		<div
			className='hero min-h-screen'
			style={{ backgroundImage: 'url(https://www.fourgrandmere.com/modules/psblog/uploads/1643296375.jpg)' }}
		>
			<div className='hero-overlay bg-opacity-60'></div>
			<div className='hero-content text-center text-neutral-content'>
				<div className='max-w-md'>
					<h1 className='mb-5 text-5xl font-bold'>Hello there</h1>
					<p className='mb-5'>
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
						deleniti eaque aut repudiandae et a id nisi.
					</p>
					<button onClick={() => setPage('pizzas')} className='btn btn-primary'>
						Get Started
					</button>
				</div>
			</div>
		</div>
	)
}
