import { AuthForm } from './components/AuthForm/AuthForm'
import { Header } from './components/Header/Header'
import { TodolistApp } from './components/Todolist/TodolistApp'
import { useUser } from './store/hooks'

export const App = () => {
	const { isLoggedIn } = useUser()
	if (!isLoggedIn) {
		return <AuthForm />
	}
	return (
		<div>
			<Header />
			<TodolistApp />
		</div>
	)
}
