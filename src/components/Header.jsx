const Header = props => {
	return (
		<header>
			<div>
				<h3 className='title'>{props.title}</h3>
			</div>
			<h2>{props.message}</h2>
			<hr />
		</header>
	)
}

export default Header
