import { ProductCard } from './ProductCard'
import s from './Products.module.css'
import PropTypes from 'prop-types'
export const List = ({ items, onAddToCart }) => {
	return (
		<ul className={s.list}>
			{items.map(item => (
				<ProductCard key={item.id} item={item} onAddToCart={onAddToCart} />
			))}
		</ul>
	)
}

List.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			thumbnail: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
		})
	),
}
