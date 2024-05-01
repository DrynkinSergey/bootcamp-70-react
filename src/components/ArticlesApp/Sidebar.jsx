import s from './Articles.module.css'
import Button from './../Button/Button'
export const Sidebar = ({ setSelectedTab, openModal }) => {
	return (
		<aside className={s.sidebar}>
			<h3>Bootcamp 70</h3>
			<nav>
				<Button onClick={() => setSelectedTab('home')}>Home</Button>
				<Button onClick={() => setSelectedTab('fav')}>Favorites</Button>
				<Button onClick={openModal}>Add article</Button>
			</nav>
		</aside>
	)
}
