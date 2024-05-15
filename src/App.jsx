import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Statistics } from './pages/Statistics'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { NotFound } from './pages/NotFound'
import { AddTransaction } from './pages/AddTransaction'
import { Layout } from './components/Layout'
import { PrivateRoute } from './Routes/PrivateRoute'
import { PublicRoute } from './Routes/PublicRoute'
import { EditPage } from './pages/EditPage'

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
				<Route index element={<Dashboard />} />
				<Route path='statistics' element={<Statistics />} />
				<Route path='add-transaction' element={<AddTransaction />} />
				<Route path='edit/:id' element={<EditPage />} />
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
