import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import 'modern-normalize'
import { PageProvider } from './store/PageProvider.jsx'
import { AuthProvider } from './store/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
ReactDOM.createRoot(document.getElementById('root')).render(
	<AuthProvider>
		<PageProvider>
			<App />
			<ToastContainer autoClose={1500} />
		</PageProvider>
	</AuthProvider>
)
