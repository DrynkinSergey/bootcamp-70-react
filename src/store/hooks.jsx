import { useContext } from 'react'
import { UserContext } from './UserProvider'
import { TodoContext } from './TodosProvider'

export const useUser = () => useContext(UserContext)
export const useTodos = () => useContext(TodoContext)
