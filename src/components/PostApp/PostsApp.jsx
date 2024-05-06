import { useEffect, useState } from 'react'
import { List } from './List'
import { fetchPosts } from '../../services/api'
import Button from './../Button/Button'
import { useInView } from 'react-intersection-observer'

export const PostsApp = () => {
	const [items, setItems] = useState([])
	const [skip, setSkip] = useState(0)
	const [limit, setLimit] = useState(5)
	const [infinity, setInfinity] = useState(false)
	const { ref, inView } = useInView({
		threshold: 0,
	})
	useEffect(() => {
		const getPosts = async () => {
			try {
				const { posts } = await fetchPosts({ skip: skip })
				setItems(prev => [...prev, ...posts])
			} catch (error) {
				console.log(error)
			}
		}

		getPosts()
	}, [skip])

	useEffect(() => {
		infinity && setSkip(prev => prev + limit)
	}, [inView, infinity, limit])

	const handleChangeSkip = () => {
		setSkip(prev => prev + limit)
	}

	return (
		<div>
			<h3>
				Infinity scroll <Button onClick={() => setInfinity(prev => !prev)}>Enable</Button>
			</h3>
			<List items={items} />
			{items.length ? (
				<div style={{ visibility: infinity ? 'hidden' : 'visible' }} ref={ref}>
					<Button onClick={handleChangeSkip}>Load more</Button>
				</div>
			) : null}
		</div>
	)
}
