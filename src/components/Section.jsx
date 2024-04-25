const Section = props => {
	return (
		<div>
			<h2>{props.title}</h2>
			<ul>
				{props.data.map(item => (
					<li key={item.id}>{item.title}</li>
				))}
			</ul>
		</div>
	)
}

export default Section
