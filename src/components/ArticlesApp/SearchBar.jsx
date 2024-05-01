import s from './Articles.module.css'
export const SearchBar = ({ setSearchStr }) => {
	return (
		<div>
			<input
				onChange={e => setSearchStr(e.target.value)}
				type='search'
				placeholder='Enter search value...'
				className={s.input}
			/>
		</div>
	)
}
