import { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const login = data => setUser(data)
	const logout = () => setUser(null)

	const contextValue = {
		user,
		login,
		logout,
		isLoggedIn: Boolean(user),
	}
	return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}
