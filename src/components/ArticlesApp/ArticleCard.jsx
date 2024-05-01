import { formatDistanceToNow } from 'date-fns'
import eoLocale from 'date-fns/locale/uk'
import Button from '../Button/Button'
import s from './Articles.module.css'
import { FaStar } from 'react-icons/fa'

export const ArticleCard = ({
	favorites = [],
	article,
	handleDeleteArticle,
	handleDeleteFromFavorites,
	handleAddToFavorites,
	page,
}) => {
	const isExistInFavorites = favorites.some(item => item.id === article.id)
	return (
		<li className={s.article}>
			{isExistInFavorites && <FaStar color='gold' />}
			<h3>{article.title}</h3>
			<p>{article.body}</p>
			<span>{formatDistanceToNow(article.createdAt, { addSuffix: true, locale: eoLocale })}</span>
			<span>{article.author}</span>
			<div>
				{page !== 'fav' && (
					<Button
						onClick={() => (isExistInFavorites ? handleDeleteFromFavorites(article.id) : handleAddToFavorites(article))}
					>
						{isExistInFavorites ? 'Remove from favorites' : 'Add to favorites'}
					</Button>
				)}
				<Button onClick={() => handleDeleteArticle(article.id)}>Delete</Button>
			</div>
		</li>
	)
}
