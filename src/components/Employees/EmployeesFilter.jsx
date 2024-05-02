import s from './Employee.module.css'
const skilsList = ['all', 'react', 'angular', 'vue']

export const EmployeesFilter = () => {
	return (
		<div className={s.filtersWrapper}>
			<h1>Filters</h1>
			<div className={s.flex}>
				<input className={s.input} placeholder='Enter search value...' />
				<label>
					<input type='checkbox' />
					<span> Who wants to work</span>
				</label>
			</div>
			<div className={s.flex}>
				{skilsList.map(radioButtonName => (
					<label key={radioButtonName}>
						<input name='radioButtonName' type='radio' value={radioButtonName} />
						<span> {radioButtonName}</span>
					</label>
				))}
			</div>
		</div>
	)
}
