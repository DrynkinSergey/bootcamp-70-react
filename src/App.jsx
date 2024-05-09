import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { NotFound } from './pages/NotFound'
import { Layout } from './components/Layout'
import Login from './pages/Login'
import Team from './components/NestedComponents/Team'
import Company from './components/NestedComponents/Company'
import OurMission from './components/NestedComponents/OurMission'

export const App = () => {
	return (
		<>
			{/* Завжди створюється обгортка Routes, це дає нам набір маршрутів */}
			<Routes>
				{/* В коллекції маршрутів будуть окремі роути */}
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />

					<Route path='about' element={<About />}>
						<Route path='team' element={<Team />} />
						<Route path='company' element={<Company />} />
						<Route path='ourMission' element={<OurMission />} />

						{/* https://localhost:3000/about/team */}
						{/* https://localhost:3000/about/company */}
						{/* https://localhost:3000/about/ourMission */}
					</Route>
				</Route>

				<Route path='/login' element={<Login />} />
				{/* 404 page */}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	)
}
