import { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { PageContext } from './PageProvider'
import { PizzaContext } from './PizzaProvider'

export const useAuth = () => useContext(AuthContext)
export const useRouter = () => useContext(PageContext)
export const usePizzas = () => useContext(PizzaContext)
