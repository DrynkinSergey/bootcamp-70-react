import { useContext } from 'react'
import { PageContext } from './PageProvider'

export const usePages = () => useContext(PageContext)
