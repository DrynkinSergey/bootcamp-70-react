const Header = props => {
	console.log(props)
	return (
		<header>
			<div>
				<h3>{props.title}</h3>
			</div>
			<h2>{props.message}</h2>
			<hr />
		</header>
	)
}

export default Header
