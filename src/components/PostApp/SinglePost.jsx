import s from './Posts.module.css'
export const SinglePost = ({ id, title, body }) => {
	return (
		<li className={s.post}>
			<h3>{title}</h3>
			<p>{body}</p>
		</li>
	)
}