import s from './Articles.module.css'
export const SearchBar = ({ setSearchStr }) => {
	return (
		<div>
			<input type='search' placeholder='Search...' className={s.search} onChange={e => setSearchStr(e.target.value)} />
		</div>
	)
}
