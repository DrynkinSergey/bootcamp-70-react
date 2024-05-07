import { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState('')
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const login = name => {
		setUser(name)
		setIsLoggedIn(true)
	}
	const logout = () => {
		setUser('')
		setIsLoggedIn(false)
	}

	const contextValue = {
		user,
		login,
		logout,
		isLoggedIn,
	}
	return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
}
