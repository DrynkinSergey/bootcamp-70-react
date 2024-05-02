import s from './Employee.module.css'
const skilsList = ['all', 'react', 'angular', 'vue']

export const EmployeesFilter = ({ setSearchValue, isAvailable, setIsAvailable, activeSkill, setActiveSkill }) => {
	return (
		<div className={s.filtersWrapper}>
			<h1>Filters</h1>
			<div className={s.flex}>
				<input
					className={s.input}
					type='search'
					onChange={e => setSearchValue(e.target.value)}
					placeholder='Enter search value...'
				/>
				<label>
					<input type='checkbox' checked={isAvailable} onChange={() => setIsAvailable(!isAvailable)} />
					<span> Who wants to work</span>
				</label>
			</div>
			<div className={s.flex}>
				{skilsList.map(radioButtonName => (
					<label key={radioButtonName}>
						<input
							checked={radioButtonName === activeSkill}
							name='radioButtonName'
							onChange={() => setActiveSkill(radioButtonName)}
							type='radio'
							value={radioButtonName}
						/>
						<span> {radioButtonName}</span>
					</label>
				))}
			</div>
		</div>
	)
}
