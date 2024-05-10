import { useEffect, useState } from 'react'
import { fetchPostById } from '../../services/api'
import { useParams } from 'react-router-dom'
import { useHttp } from '../../hooks/useHttp'

const PostDetails = () => {
	const { postId } = useParams()

	const [post, setPost, loading] = useHttp(fetchPostById, postId)

	return (
		<section className='p-4 flex flex-col gap-2'>
			<h1 className='text-center'>Details</h1>
			{loading ? (
				<span className='loading loading-dots loading-lg'></span>
			) : (
				<>
					<h2 className='font-bold italic'>{post.title}</h2>
					<p>{post.body}</p>
					<ul className='flex  gap-4'>
						{post.tags.map(tag => (
							<li className='badge badge-neutral text-xl' key={tag}>
								{tag}
							</li>
						))}
					</ul>
				</>
			)}
		</section>
	)
}

export default PostDetails
