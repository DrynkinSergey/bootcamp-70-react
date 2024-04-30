import Button from '../Button/Button'
import s from './Articles.module.css'
import { formatDistanceToNow } from 'date-fns'

export const Article = ({ article, onRemove, onSetFavorites }) => {
	return (
		<div className={s.article}>
			<h3>{article.title}</h3>
			<p>{article.body}</p>
			<span>{article.author}</span>
			<span>{formatDistanceToNow(article.createdAt, { addSuffix: true })}</span>
			<div>
				<Button onClick={() => onSetFavorites(article.id)}>Favorite</Button>
				<Button onClick={() => onRemove(article.id)}>Remove</Button>
			</div>
		</div>
	)
}
