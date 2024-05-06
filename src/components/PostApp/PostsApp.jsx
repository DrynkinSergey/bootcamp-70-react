import { useEffect, useState } from 'react'
import { List } from './List'
import { fetchPosts, fetchPostsByQuery } from '../../services/api'
import Button from './../Button/Button'
import { useInView } from 'react-intersection-observer'
import { Loader } from './Loader'
import { SearchBar } from './SearchBar'
import Modal from '../Modal/Modal'

export const PostsApp = () => {
	const [items, setItems] = useState([])
	const [skip, setSkip] = useState(0)
	const [limit] = useState(5)
	const [infinity, setInfinity] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(false)
	const [searchValue, setSearchValue] = useState('')
	const [total, setTotal] = useState(0)
	const [isOpen, setIsOpen] = useState(false)
	const [content, setContent] = useState(null)

	const { ref, inView } = useInView({
		threshold: 1,
		rootMargin: '0px 100px 0px 0px',
	})
	useEffect(() => {
		const getPosts = async () => {
			try {
				setIsLoading(true)
				setError(false)

				const { posts, total } = searchValue
					? await fetchPostsByQuery({ skip, q: searchValue })
					: await fetchPosts({ skip: skip })

				setItems(prev => [...prev, ...posts])
				setTotal(total)
			} catch (error) {
				setError(true)
			} finally {
				setIsLoading(false)
			}
		}

		getPosts()
	}, [searchValue, skip])

	const handleOpenModal = item => {
		setIsOpen(true)
		setContent(item)
	}
	const handleCloseModal = () => {
		setIsOpen(false)
	}

	useEffect(() => {
		infinity && setSkip(prev => prev + limit)
	}, [inView, infinity, limit])

	const handleChangeSkip = () => {
		setSkip(prev => prev + limit)
	}

	const handleSetQuery = query => {
		setSearchValue(query)
		setItems([])
		setSkip(0)
	}

	return (
		<div>
			<SearchBar setSearchValue={handleSetQuery} />
			<List items={items} openModal={handleOpenModal} />
			<Button onClick={() => setInfinity(prev => !prev)}>Enable Infinity scroll</Button>
			{error && <h2>Something went wrong...</h2>}
			{isLoading && <Loader />}
			{items.length && items.length < total ? (
				<div style={{ visibility: infinity ? 'hidden' : 'visible' }} ref={ref}>
					<Button onClick={handleChangeSkip}>Load more</Button>
				</div>
			) : null}
			{isOpen && (
				<Modal onClose={handleCloseModal}>
					<h2>{content.title}</h2>
					<p>{content.body}</p>
					<ul>
						{content.tags.map(item => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</Modal>
			)}
		</div>
	)
}
