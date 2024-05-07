import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import 'modern-normalize'
import { UserProvider } from './store/UserProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<UserProvider>
		<App />
	</UserProvider>
)
