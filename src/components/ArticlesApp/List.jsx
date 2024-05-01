import { ArticleCard } from './ArticleCard'
import s from './Articles.module.css'
import { SearchBar } from './SearchBar'
import { Sort } from './Sort'
export const List = ({
	articles,
	handleDeleteFromFavorites,
	favorites,
	setSortType,
	setSearchStr,
	handleDeleteArticle,
	handleAddToFavorites,
}) => {
	return (
		<div className={s.articles}>
			<h2>Articles page</h2>
			<div className={s.searchBar}>
				<SearchBar setSearchStr={setSearchStr} />
				<Sort setSortType={setSortType} />
			</div>
			{articles.length ? (
				<ul className={s.list}>
					{articles.map(article => (
						<ArticleCard
							favorites={favorites}
							key={article.id}
							article={article}
							handleDeleteFromFavorites={handleDeleteFromFavorites}
							handleDeleteArticle={handleDeleteArticle}
							handleAddToFavorites={handleAddToFavorites}
						/>
					))}
				</ul>
			) : (
				<h3>No articles found... Try another query!</h3>
			)}
		</div>
	)
}
