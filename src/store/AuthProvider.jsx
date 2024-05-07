import { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({ email: 'Developer', password: 'admin' })
	const [isLoggedIn, setIsLoggedIn] = useState(true)
	const [userInfo, setUserInfo] = useState({})
	const login = data => {
		setIsLoggedIn(true)
		setUser(data)
	}
	const logout = () => {
		setIsLoggedIn(false)
		setUser(null)
	}
	const updateUser = data => {
		setUserInfo(data)
	}
	const value = {
		user,
		isLoggedIn,
		userInfo,
		login,
		logout,
		updateUser,
	}
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
