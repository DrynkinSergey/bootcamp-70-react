import { useEffect, useState } from 'react'
import { List } from './List'
import { fetchPosts } from '../../services/api'

export const PostsApp = () => {
	const [items, setItems] = useState([])

	useEffect(() => {
		const getPosts = async () => {
			try {
				const { posts } = await fetchPosts()
				setItems(posts)
			} catch (error) {
				console.log(error)
			}
		}

		getPosts()
	}, [])

	return (
		<div>
			<List items={items} />
		</div>
	)
}
