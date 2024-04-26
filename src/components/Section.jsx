const Section = ({ title = 'Default title', data = [] }) => {
	return (
		<div>
			<h2>{title}</h2>
			{data.length ? (
				<ul>
					{data.map(item => (
						<li key={item.id}>{item.title}</li>
					))}
				</ul>
			) : (
				<p>No data</p>
			)}
		</div>
	)
}

export default Section
