import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import 'modern-normalize'
import { AuthProvider } from './store/AuthProvider.jsx'
import { PageProvider } from './store/PageProvider.jsx'
import { PizzaProvider } from './store/PizzaProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<PizzaProvider>
		<PageProvider>
			<AuthProvider>
				<App />
			</AuthProvider>
		</PageProvider>
	</PizzaProvider>
)
