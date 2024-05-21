import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Todos } from './pages/Todos'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { NotFound } from './pages/NotFound'
import { PrivateRoute } from './routes/PrivateRoute'
import { PublicRoute } from './routes/PublicRoute'
import { useDispatch, useSelector } from 'react-redux'
import { refreshThunk } from './redux/auth/operations'
import { useEffect } from 'react'
import { selectIsRefreshing } from './redux/auth/slice'
import { RefreshLoader } from './components/RefreshLoader'

export const App = () => {
	const dispatch = useDispatch()
	const isRefresh = useSelector(selectIsRefreshing)
	console.log(isRefresh)
	useEffect(() => {
		dispatch(refreshThunk())
	}, [dispatch])
	return isRefresh ? (
		<RefreshLoader />
	) : (
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
