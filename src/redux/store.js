import { devToolsEnhancer } from '@redux-devtools/extension'
import { combineReducers, createStore } from 'redux'
import { counterReducer } from './counter/reducer'
import { todoReducer } from './todolist/reducer'

const enhancer = devToolsEnhancer()

const rootReducer = combineReducers({
	counter: counterReducer,
	todolist: todoReducer,
})

export const store = createStore(rootReducer, enhancer)
