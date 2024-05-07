import { createContext } from 'react'
import { A } from './A'

export const AutoContext = createContext()
export const ProfileContext = createContext()

export const Test = () => {
	const auto = 'Audi'
	const model = 'RS6'

	const contextValue = {
		price: 200000,
		color: 'black',
		data: ['hello', 'world'],
		sayHi: name => console.log(`Hi, ${name}`),
	}
	const profileContext = {
		user: 'Ivan',
		mail: 'Test123@mail.com.ua',
	}

	return (
		<div>
			<ProfileContext.Provider value={profileContext}>
				<AutoContext.Provider value={contextValue}>
					<A auto={auto} model={model} />
				</AutoContext.Provider>
			</ProfileContext.Provider>
		</div>
	)
}
