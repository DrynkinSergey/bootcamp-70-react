import { Button } from './components/Button'
import { Modal } from './components/Modal/Modal'
import Section from './components/Section/Section'
import { SectionWithTitle } from './components/SectionWithTitle'
import userData from './assets/user.json'
import Profile from './components/Profile/Profile'
import Header from './components/Header'

const App = () => {
	const filmsData = [
		{ id: 1, title: 'Taxi' },
		{ id: 2, title: 'Harry Potter' },
		{ id: 3, title: 'GoT' },
	]
	const goodsData = [
		{ id: 1, title: 'phone' },
		{ id: 2, title: 'tablet' },
		{ id: 3, title: 'pc' },
	]

	return (
		<>
			<Header title='Intro, React' message='Hello' />
			<Profile userData={userData} />

			<Section data={filmsData} />
			<Section title='Goods section' data={goodsData} />
			{/* <Section title='Music section' data={musicSection} /> */}

			{/* {isLoggedIn && <h1>Online</h1>}
			{isLoggedIn || <h1>Offline</h1>}
			{age >= 18 ? <h1>Adult</h1> : <h1>Young</h1>} */}
			<SectionWithTitle title='SOme info'>
				<p className=''>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptates sed, ab a excepturi qui numquam autem
					quas est minima? Culpa qui ipsa hic, earum ipsum iusto vitae fuga beatae.
				</p>
			</SectionWithTitle>

			<SectionWithTitle title='Rating'>
				<Button>Bad</Button>
				<Button>Good</Button>
				<Button>Neutral</Button>
			</SectionWithTitle>

			<Button>
				<span>Click</span>
			</Button>
			<Button>Login</Button>
			<Button>Register</Button>
			<Modal title='Реклама'>
				<p>Продам холодильник</p>
				<p>Ціна 10000грн</p>
				<button>Купити</button>
			</Modal>

			<Modal title='Login'>
				<form action=''>
					<input type='text' />
					<input type='text' />
					<button>Login</button>
				</form>
			</Modal>
		</>
	)
}

export default App
