import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counter/slice'
import { todoReducer } from './todolist/slice'
import { filterReducer } from './filter/slice'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
console.log(import.meta.env)

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
	// whitelist:['token'],
	// blacklist:['todos']
}
export const store = configureStore({
	reducer: {
		counter: counterReducer,
		todos: persistReducer(persistConfig, todoReducer),
		filter: filterReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
	devTools: import.meta.env.MODE !== 'production', // true
})
export const persistor = persistStore(store)
