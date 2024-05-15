import { configureStore } from '@reduxjs/toolkit'
import { transactionsReducer } from './transactionsSlice'
import { catsReducer } from './catsSlice'
import { authReducer } from './authSlice'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
}
const transactionsConfig = {
	key: 'transactions',
	version: 1,
	storage,
}
const catsConfig = {
	key: 'cats',
	version: 1,
	storage,
}
export const store = configureStore({
	reducer: {
		transactions: persistReducer(transactionsConfig, transactionsReducer),
		cats: persistReducer(catsConfig, catsReducer),
		auth: persistReducer(persistConfig, authReducer),
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})
export const persistor = persistStore(store)
