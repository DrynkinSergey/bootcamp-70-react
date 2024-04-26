const Header = props => {
	console.log(props)
	return (
		<header>
			<div>
				<h3 style={{ color: 'red', textAlign: 'center', fontSize: '2rem', textDecoration: 'underline' }}>
					{props.title}
				</h3>
			</div>
			<h2>{props.message}</h2>
			<hr />
		</header>
	)
}

export default Header
