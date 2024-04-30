import s from './Articles.module.css'
export const Sort = ({ setSortType }) => {
	const typesOfSort = ['newest', 'oldest', 'a-z', 'z-a']

	return (
		<select onChange={e => setSortType(e.target.value)} className={s.search}>
			<option value=''>Default</option>
			{typesOfSort.map(type => (
				<option key={type} value={type}>
					{type}
				</option>
			))}
		</select>
	)
}
