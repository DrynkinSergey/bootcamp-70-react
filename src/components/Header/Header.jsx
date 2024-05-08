export const Header = () => {
	return (
		<div className=' px-2 py-2 bg-teal-500 text-white font-bold flex justify-between items-center text-4xl'>
			<h3>TODO APP</h3>
			<p className='text-2xl'>{'user'}</p>
			<button className='btn ' onClick={'logout'}>
				Logout
			</button>
		</div>
	)
}
