import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import 'modern-normalize'
import { PageProvider } from './store/PageProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<PageProvider>
		<App />
	</PageProvider>
)
