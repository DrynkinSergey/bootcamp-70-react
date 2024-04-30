import Button from './../Button/Button'
import s from './Products.module.css'
import PropTypes from 'prop-types'
export const ProductCard = ({ item, onAddToCart }) => {
	return (
		<li className={s.cardWrapper}>
			<div className={s.imgWrapper}>
				<img src={item.thumbnail} alt={item.title} />
			</div>
			<article>
				<h2>{item.title}</h2>
				<p>{item.description}</p>
				<div className={s.options}>
					<p>{item.price}$</p>
					<Button onClick={() => onAddToCart(item)}>Add to cart</Button>
				</div>
			</article>
		</li>
	)
}

ProductCard.propTypes = {
	item: PropTypes.shape({
		thumbnail: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
	}),
}
