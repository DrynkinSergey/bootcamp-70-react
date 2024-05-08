import { Header } from './components/Header/Header'
import { Login } from './components/Login'
import { Home } from './pages/Home'
import { Pizzas } from './pages/Pizzas'
import { useAuth, usePages } from './store/hooks'

export const App = () => {
	const { page } = usePages()
	const { isLoggedIn } = useAuth()

	if (!isLoggedIn) {
		return <Login />
	}

	return (
		<div>
			<Header />
			{page === 'home' && <Home />}
			{page === 'pizzas' && <Pizzas />}
			{/* {page === 'pizzas' && <Cart />} */}
		</div>
	)
}
