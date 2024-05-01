import { List } from './List'
import { Sidebar } from './Sidebar'
import s from './Articles.module.css'
import { useState } from 'react'
import { data } from '../../assets/articles'
import { Favorites } from './Favorites'

export const ArticleApp = () => {
	const [articles, setArticles] = useState(data)
	const [favorites, setFavorites] = useState([])
	const [selectedTab, setSelectedTab] = useState('home')

	const handleDeleteArticle = id => {
		setArticles(prev => prev.filter(item => item.id !== id))
	}
	const handleDeleteFromFavorites = id => {
		setFavorites(prev => prev.filter(item => item.id !== id))
	}

	const handleAddToFavorites = article => {
		setFavorites(prev => [...prev, article])
	}

	return (
		<div className={s.wrapperMain}>
			<Sidebar setSelectedTab={setSelectedTab} />
			{selectedTab === 'home' && (
				<List
					articles={articles}
					handleDeleteArticle={handleDeleteArticle}
					handleAddToFavorites={handleAddToFavorites}
				/>
			)}
			{selectedTab === 'fav' && <Favorites items={favorites} handleDeleteFromFavorites={handleDeleteFromFavorites} />}
		</div>
	)
}
