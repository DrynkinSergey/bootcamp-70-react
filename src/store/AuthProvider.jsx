import { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const login = credentials => {
		setUser(credentials)
		setIsLoggedIn(true)
	}

	const logout = () => {
		setUser(null)
		setIsLoggedIn(false)
	}

	const contextValue = {
		user,
		isLoggedIn,
		login,
		logout,
	}
	return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}
