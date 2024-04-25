import Header from './components/Header'
import Section from './components/Section'

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
	const musicSection = [
		{ id: 1, title: 'AC/DC' },
		{ id: 2, title: 'Nirvana' },
		{ id: 3, title: 'Pivovarov' },
	]

	return (
		<>
			<Header title='Intro, React' message='Hello' />
			<Section title='Movie section' data={filmsData} />
			<Section title='Goods section' data={goodsData} />
			<Section title='Music section' data={musicSection} />
		</>
	)
}

export default App
