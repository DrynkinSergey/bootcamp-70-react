import { formatDistanceToNow } from 'date-fns'
import eoLocale from 'date-fns/locale/uk'
import Button from '../Button/Button'
import s from './Articles.module.css'
export const ArticleCard = ({ article, handleDeleteArticle, handleAddToFavorites, page }) => {
	return (
		<li className={s.article}>
			<h3>{article.title}</h3>
			<p>{article.body}</p>
			<span>{formatDistanceToNow(article.createdAt, { addSuffix: true, locale: eoLocale })}</span>
			<span>{article.author}</span>
			<div>
				{page !== 'fav' && <Button onClick={() => handleAddToFavorites(article)}>Add to favorite</Button>}
				<Button onClick={() => handleDeleteArticle(article.id)}>Delete</Button>
			</div>
		</li>
	)
}
