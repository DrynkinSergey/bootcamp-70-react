import { createContext, useState } from 'react'

export const PageContext = createContext()

export const PageProvider = ({ children }) => {
	const [page, setPage] = useState('home')

	const contextValue = {
		page,
		setPage,
	}

	return <PageContext.Provider value={contextValue}>{children}</PageContext.Provider>
}
