export const Pizzas = () => {
	return (
		<div
			className='relative min-h-screen'
			style={{
				backgroundImage:
					'url(https://www.sadahastanesi.com/tr/public/storage/pizza-kac-kalori---pizzanin-besin-degeri.webp) ',
				backgroundSize: 'cover',
			}}
		>
			<div className='absolute inset-0 z-[1] bg-black bg-opacity-50'></div>
			<div className='relative z-[2] font-bold text-white text-8xl'>
				<h1>Pizza CODE 🍕 </h1>
			</div>
		</div>
	)
}
