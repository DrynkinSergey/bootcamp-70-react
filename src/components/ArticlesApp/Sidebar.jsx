import Button from '../Button/Button'
import s from './Articles.module.css'
export const Sidebar = ({ setSelectedTab }) => {
	return (
		<aside className={s.sidebar}>
			<h2>Articles App</h2>
			<nav>
				<Button onClick={() => setSelectedTab('home')}>Home</Button>
				<Button onClick={() => setSelectedTab('favorites')}>Favorites</Button>
				<Button onClick={() => setSelectedTab('add')}>Add Article</Button>
			</nav>
		</aside>
	)
}
