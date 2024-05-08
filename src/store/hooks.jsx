import { useContext } from 'react'
import { PageContext } from './PageProvider'
import { AuthContext } from './AuthProvider'

export const usePages = () => {
	const context = useContext(PageContext)
	return context
}
export const useAuth = () => useContext(AuthContext)
