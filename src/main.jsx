import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import 'modern-normalize'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
			<ToastContainer autoClose={1500} />
		</Provider>
	</BrowserRouter>
)
