import { devToolsEnhancer } from '@redux-devtools/extension'
import { combineReducers, createStore } from 'redux'
import { counterReducer } from './counter/reducer'
import { todoReducer } from './todolist/reducer'
import { filterReducer } from './filter/reducer'

const enhancer = devToolsEnhancer()

const rootReducer = combineReducers({
	counter: counterReducer,
	todolist: todoReducer,
	filter: filterReducer,
})

export const store = createStore(rootReducer, enhancer)
