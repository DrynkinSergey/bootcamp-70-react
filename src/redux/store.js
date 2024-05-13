import { devToolsEnhancer } from '@redux-devtools/extension'
import { createStore } from 'redux'
import { counterReducer } from './counter/reducer'

const enhancer = devToolsEnhancer()

export const store = createStore(counterReducer, enhancer)
