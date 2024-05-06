import { cutText } from '../../helpers/cutText'
import Button from '../Button/Button'
import s from './Posts.module.css'
export const SinglePost = ({ title, body, openModal, tags }) => {
	return (
		<li className={s.post}>
			<h3>{title}</h3>
			<p>{cutText(body)}</p>
			<Button onClick={() => openModal({ title, body, tags })}>View details</Button>
		</li>
	)
}
