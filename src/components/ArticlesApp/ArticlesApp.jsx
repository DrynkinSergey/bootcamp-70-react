import { List } from './List'
import { Sidebar } from './Sidebar'
import s from './Articles.module.css'
import { useState } from 'react'
import { Favorites } from './Favorites'
import { AddArticle } from './AddArticle'
export const ArticlesApp = () => {
	const [articles, setArticles] = useState([])
	const [selectedTab, setSelectedTab] = useState('favorites')
	const [searchStr, setSearchStr] = useState('')
	const [favorites, setFavorites] = useState([])
	const [sortType, setSortType] = useState('')
	const addArticle = article => {
		setArticles([...articles, article])
	}

	const sortArticles = () => {
		switch (sortType) {
			case 'newest':
				return [...articles].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
			case 'oldest':
				return [...articles].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
			case 'a-z':
				return [...articles].sort((a, b) => a.title.localeCompare(b.title))
			case 'z-a':
				return [...articles].sort((a, b) => b.title.localeCompare(a.title))
			default:
				return articles
		}
	}

	const removeArticle = id => {
		setArticles(articles.filter(article => article.id !== id))
	}
	const removeFavorite = id => {
		setFavorites(favorites.filter(article => article.id !== id))
	}

	const handleSetFavorites = id => {
		setFavorites(
			articles.map(article => (article.id === id ? { ...article, isFavorite: !article.isFavorite } : article))
		)
	}

	const filteredArticles = articles.filter(article => article.title.toLowerCase().includes(searchStr.toLowerCase()))

	return (
		<div className={s.wrapperMain}>
			<Sidebar setSelectedTab={setSelectedTab} />
			{selectedTab === 'home' && (
				<List
					setSortType={setSortType}
					articles={sortType ? sortArticles() : filteredArticles}
					onRemove={removeArticle}
					onSetFavorites={handleSetFavorites}
					setSearchStr={setSearchStr}
				/>
			)}
			{selectedTab === 'favorites' && <Favorites articles={favorites} onRemove={removeFavorite} />}
			{selectedTab === 'add' && <AddArticle addArticle={addArticle} setSelectedTab={setSelectedTab} />}
		</div>
	)
}
