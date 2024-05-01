import { ArticleCard } from './ArticleCard'
import s from './Articles.module.css'
export const Favorites = ({ items, handleDeleteFromFavorites }) => {
	return (
		<div>
			<h2>Favorites</h2>
			<ul className={s.fav}>
				{items.map(item => (
					<ArticleCard key={item.id} article={item} handleDeleteArticle={handleDeleteFromFavorites} page='fav' />
				))}
			</ul>
		</div>
	)
}
