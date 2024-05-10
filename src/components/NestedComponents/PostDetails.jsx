import { useEffect, useState } from 'react'
import { fetchPostById } from '../../services/api'
import { useParams } from 'react-router-dom'

const PostDetails = () => {
	const { postId } = useParams()
	const [post, setPost] = useState(null)
	useEffect(() => {
		const getPost = async () => {
			const data = await fetchPostById(postId)
			setPost(data)
		}
		getPost()
	}, [postId])

	if (!post) return <span className='loading loading-dots loading-lg' />

	return (
		<section className='p-4 flex flex-col gap-2'>
			<h1 className='text-center'>Details</h1>
			<h2 className='font-bold italic'>{post.title}</h2>
			<p>{post.body}</p>
			<ul className='flex  gap-4'>
				{post.tags.map(tag => (
					<li className='badge badge-neutral text-xl' key={tag}>
						{tag}
					</li>
				))}
			</ul>
		</section>
	)
}

export default PostDetails
