import Button from '../Button/Button'
import s from './Articles.module.css'
import { formatDistanceToNow } from 'date-fns'
import { FaStar } from 'react-icons/fa'

export const Article = ({ favorites = [], article, onRemove, onSetFavorites }) => {
	const isExist = favorites.some(favorite => favorite.id === article.id)
	return (
		<div className={s.article}>
			{isExist ? <FaStar color='gold' className={s.star} /> : null}
			<h3>{article.title}</h3>
			<p>{article.body}</p>
			<span>{article.author}</span>
			<span>{formatDistanceToNow(article.createdAt, { addSuffix: true })}</span>
			<div>
				<Button onClick={() => onSetFavorites(article)}>
					{isExist ? 'Remove from favorites' : 'Add to favorites'}
				</Button>
				<Button onClick={() => onRemove(article)}>Remove</Button>
			</div>
		</div>
	)
}
