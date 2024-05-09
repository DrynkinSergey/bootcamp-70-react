import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { NotFound } from './pages/NotFound'
import { Layout } from './components/Layout'
import Login from './pages/Login'

export const App = () => {
	return (
		<>
			{/* Завжди створюється обгортка Routes, це дає нам набір маршрутів */}
			<Routes>
				{/* В коллекції маршрутів будуть окремі роути */}
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					{/* 404 page */}
				</Route>

				<Route path='/login' element={<Login />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	)
}
