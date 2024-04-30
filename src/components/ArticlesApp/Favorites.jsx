import { Article } from './Article'
import s from './Articles.module.css'
export const Favorites = ({ articles, onRemove }) => {
	return (
		<div>
			<h2>Favorites</h2>
			<ul className={s.list}>
				{articles.map(article => (
					<Article key={article.id} article={article} onRemove={onRemove} />
				))}
			</ul>
		</div>
	)
}
