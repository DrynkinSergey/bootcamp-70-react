import { Suspense } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { fetchPostsById } from '../../services/api'
import { useHttp } from '../../hooks/useHttp'

const Posts = () => {
	const { userId } = useParams()
	/* https://localhost:3000/users/1/posts */

	const [posts, _, loading] = useHttp(fetchPostsById, userId)

	if (loading) return <span className='loading loading-dots loading-lg' />

	return (
		<div className='grid gap-4 grid-cols-2'>
			<ul>
				{posts?.map((post, idx) => (
					<li className='text-xl font-bold' key={post.id}>
						{idx + 1}.<Link to={`details/${post.id}`}>{post.title}</Link>
					</li>
				))}
			</ul>
			<Suspense fallback={<span className='loading loading-infinity loading-lg'></span>}>
				<Outlet />
			</Suspense>
		</div>
	)
}

export default Posts
