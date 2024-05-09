import { Link, Route, Routes } from 'react-router-dom'

export const App = () => {
	return (
		<div>
			<nav className='flex gap-4 text-4xl'>
				{/* Щоб переходити по маршрутам потрібно використовувати Link замість a */}
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
			</nav>
			{/* Завжди створюється обгортка Routes, це дає нам набір маршрутів */}
			<Routes>
				{/* В коллекції маршрутів будуть окремі роути */}
				<Route path='/' element={<h1>Hello world, home page</h1>} />
				<Route path='/about' element={<h1>About page</h1>} />
			</Routes>
		</div>
	)
}
