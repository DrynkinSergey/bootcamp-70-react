import { createContext, useState } from 'react'
// 1. Створюємо контекст
export const UserContext = createContext()

// 2. Створюємо компонент провайдера. Цей компонент приймає чілдрен
export const UserProvider = ({ children }) => {
	// 3. Створюємо стейт, котрий передамо всім компонентам провайдера
	const [user, setUser] = useState('Antonio')
	const [isLoggedIn, setIsLoggedIn] = useState(true)
	// 4. Створюємо функціонал для роботи зі стейтом
	const login = name => {
		setUser(name)
		setIsLoggedIn(true)
	}
	const logout = () => {
		setUser('')
		setIsLoggedIn(false)
	}

	// 5. Створюємо змінну для збору всіх даних та функціоналу
	const contextValue = {
		user,
		login,
		logout,
		isLoggedIn,
	}

	// 6. Повертаємо контекст у вигляді провайдеру і даємо йому пропс велью.
	// В цьому велью лежить весь функціонал провайдера
	// Також маємо огорнути наші чілдрени
	return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
}

// 7. Ідемо в main.js і огортаємо <App/>
