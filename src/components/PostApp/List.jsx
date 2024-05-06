import { SinglePost } from './SinglePost'
import s from './Posts.module.css'
export const List = ({ items, openModal }) => {
	return (
		<ul className={s.list}>
			{items.map(item => (
				<SinglePost openModal={openModal} key={item.id} {...item} />
			))}
		</ul>
	)
}
