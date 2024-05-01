import { ArticleCard } from './ArticleCard'
import s from './Articles.module.css'
export const List = ({ articles, handleDeleteArticle, handleAddToFavorites }) => {
	return (
		<div className={s.articles}>
			<h2>Articles page</h2>
			<ul className={s.list}>
				{articles.map(article => (
					<ArticleCard
						key={article.id}
						article={article}
						handleDeleteArticle={handleDeleteArticle}
						handleAddToFavorites={handleAddToFavorites}
					/>
				))}
			</ul>
		</div>
	)
}
