import s from './Section.module.css'
const Section = ({ title = 'Default title', data = [] }) => {
	return (
		<div>
			<h2 className={s.title}>{title}</h2>

			{data.length ? (
				<ul className={s.list}>
					{data.map(item => (
						<li className={s.item} key={item.id}>
							{item.title}
							<button>Delete</button>
						</li>
					))}
				</ul>
			) : (
				<p>No data</p>
			)}
		</div>
	)
}

export default Section
