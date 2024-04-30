import { Article } from './Article'
import s from './Articles.module.css'
import { SearchBar } from './SearchBar'
import { Sort } from './Sort'
export const List = ({ articles = [], onRemove, onSetFavorites, setSearchStr, setSortType }) => {
	return (
		<div className={s.articles}>
			<h2>Articles</h2>
			<SearchBar setSearchStr={setSearchStr} />
			<Sort setSortType={setSortType} />
			<ul className={s.list}>
				{articles.map(article => (
					<Article key={article.id} article={article} onRemove={onRemove} onSetFavorites={onSetFavorites} />
				))}
			</ul>
		</div>
	)
}
