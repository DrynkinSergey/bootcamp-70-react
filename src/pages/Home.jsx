import { useRouter } from '../store/hooks'

export const Home = () => {
	const { changePage } = useRouter()
	return (
		<div className='hero min-h-screen bg-base-200'>
			<div className='hero-content flex-col lg:flex-row'>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Supreme_pizza.jpg/1200px-Supreme_pizza.jpg'
					className='max-w-4xl rounded-lg shadow-2xl'
				/>
				<div>
					<h1 className='text-5xl font-bold'>Box Office News!</h1>
					<p className='py-6'>Welcome to our Pizza Code!</p>
					<button onClick={() => changePage('pizzas')} className='btn btn-primary'>
						Get Started
					</button>
				</div>
			</div>
		</div>
	)
}
