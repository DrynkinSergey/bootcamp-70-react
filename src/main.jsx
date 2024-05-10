import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import 'modern-normalize'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './store/AuthProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
	// Обов'язкова обгортка для того, щоб ми могли парсити URL і працювала маршрутизація
	<BrowserRouter>
		<AuthProvider>
			<App />
			<ToastContainer autoClose={1500} />
		</AuthProvider>
	</BrowserRouter>
)
