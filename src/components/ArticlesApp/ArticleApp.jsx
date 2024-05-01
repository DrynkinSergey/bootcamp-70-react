import { List } from './List'
import { Sidebar } from './Sidebar'
import s from './Articles.module.css'
import { useEffect, useState } from 'react'
import { data } from '../../assets/articles'
import { Favorites } from './Favorites'
import { ErrorBoundary } from './ErrorBoundary'
import Modal from '../Modal/Modal'
import { AddArticleForm } from './AddArticleForm'
import { nanoid } from 'nanoid'

export const ArticleApp = () => {
	const [articles, setArticles] = useState(() => JSON.parse(window.localStorage.getItem('articles')) || data)
	const [favorites, setFavorites] = useState([])
	const [selectedTab, setSelectedTab] = useState('home')
	const [isOpen, setIsOpen] = useState(false)
	const [searchStr, setSearchStr] = useState('')
	const [sortType, setSortType] = useState('')

	useEffect(() => {
		window.localStorage.setItem('articles', JSON.stringify(articles))
	}, [articles])

	const openModal = () => setIsOpen(true)
	const closeModal = () => setIsOpen(false)

	const handleDeleteArticle = id => {
		setArticles(prev => prev.filter(item => item.id !== id))
	}
	const handleDeleteFromFavorites = id => {
		setFavorites(prev => prev.filter(item => item.id !== id))
	}

	const handleAddToFavorites = article => {
		setFavorites(prev => [...prev, article])
	}

	const handleAddArticle = data => {
		const newArticle = { ...data, id: nanoid(), createdAt: Date.now() }
		setArticles(prev => [...prev, newArticle])
		closeModal()
	}

	const filteredArticles = articles.filter(
		item =>
			item.title.toLowerCase().includes(searchStr.toLowerCase()) ||
			item.body.toLowerCase().includes(searchStr.toLowerCase())
	)

	const sortedArticles = () => {
		console.log('sort')
		switch (sortType) {
			case 'newest':
				return filteredArticles.sort((a, b) => b.createdAt - a.createdAt)
			case 'oldest':
				return filteredArticles.sort((a, b) => a.createdAt - b.createdAt)
			case 'a-z':
				return filteredArticles.sort((a, b) => a.title.localeCompare(b.title))
			case 'z-a':
				return filteredArticles.sort((a, b) => b.title.localeCompare(a.title))
			default:
				return filteredArticles
		}
	}

	return (
		<div className={s.wrapperMain}>
			<ErrorBoundary fallback={<p>Something went wrong</p>}>
				<Sidebar setSelectedTab={setSelectedTab} openModal={openModal} />
			</ErrorBoundary>

			{selectedTab === 'home' && (
				<List
					favorites={favorites}
					setSortType={setSortType}
					setSearchStr={setSearchStr}
					articles={sortedArticles()}
					handleDeleteArticle={handleDeleteArticle}
					handleAddToFavorites={handleAddToFavorites}
					handleDeleteFromFavorites={handleDeleteFromFavorites}
				/>
			)}
			{selectedTab === 'fav' && <Favorites items={favorites} handleDeleteFromFavorites={handleDeleteFromFavorites} />}
			{isOpen && (
				<Modal title='Add article' onClose={closeModal}>
					<AddArticleForm handleAddArticle={handleAddArticle} />
				</Modal>
			)}
		</div>
	)
}
