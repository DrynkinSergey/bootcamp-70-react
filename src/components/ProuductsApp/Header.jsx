import Button from './../Button/Button'
import s from './Products.module.css'
import PropTypes from 'prop-types'
export const Header = ({ changeTab }) => {
	return (
		<header className={s.header}>
			<h1 onClick={() => changeTab('home')}>Products React</h1>
			<div>
				<Button onClick={() => changeTab('cart')}>Cart</Button>
			</div>
		</header>
	)
}

Header.propTypes = {
	changeTab: PropTypes.func,
}
