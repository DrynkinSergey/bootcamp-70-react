import { createContext, useState } from 'react'

export const PageContext = createContext()

export const PageProvider = ({ children }) => {
	const [page, setPage] = useState('home')
	const value = {
		page,
		changePage: newPage => setPage(newPage),
	}

	return <PageContext.Provider value={value}>{children}</PageContext.Provider>
}
