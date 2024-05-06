import { useEffect, useState } from 'react'
import { List } from './List'
import { fetchPosts, fetchPostsByQuery } from '../../services/api'
import Button from './../Button/Button'
import { useInView } from 'react-intersection-observer'
import { Loader } from './Loader'
import { SearchBar } from './SearchBar'

export const PostsApp = () => {
	const [items, setItems] = useState([])
	const [skip, setSkip] = useState(0)
	const [limit, setLimit] = useState(5)
	const [infinity, setInfinity] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(false)
	const [searchValue, setSearchValue] = useState('')
	const [total, setTotal] = useState(0)

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
			<List items={items} />
			<Button onClick={() => setInfinity(prev => !prev)}>Enable Infinity scroll</Button>
			{error && <h2>Something went wrong...</h2>}
			{isLoading && <Loader />}
			{items.length && items.length < total ? (
				<div style={{ visibility: infinity ? 'hidden' : 'visible' }} ref={ref}>
					<Button onClick={handleChangeSkip}>Load more</Button>
				</div>
			) : null}
		</div>
	)
}
