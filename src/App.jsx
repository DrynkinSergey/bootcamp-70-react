import { Login } from './components/Login/Login'
import { useAuth, useRouter } from './store/hooks'
import { Header } from './components/Header/Header'
import { Home } from './pages/Home'
import { Pizzas } from './pages/Pizzas'
import { Cart } from './pages/Cart'

export const App = () => {
	const { isLoggedIn } = useAuth()
	const { page } = useRouter()
	if (!isLoggedIn) return <Login />
	return (
		<div className='background'>
			<Header />
			{page === 'home' && <Home />}
			{page === 'pizzas' && <Pizzas />}
			{page === 'cart' && <Cart />}
		</div>
	)
}
