import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Todos } from './pages/Todos'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { NotFound } from './pages/NotFound'
import { PrivateRoute } from './routes/PrivateRoute'
import { PublicRoute } from './routes/PublicRoute'

export const App = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<PrivateRoute>
						<Layout />
					</PrivateRoute>
				}
			>
				<Route index element={<Home />} />
				<Route path='todos' element={<Todos />} />
			</Route>
			<Route
				path='/login'
				element={
					<PublicRoute>
						<Login />
					</PublicRoute>
				}
			/>
			<Route
				path='/register'
				element={
					<PublicRoute>
						<Register />
					</PublicRoute>
				}
			/>
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}
// https://goit-task-manager.herokuapp.com/
