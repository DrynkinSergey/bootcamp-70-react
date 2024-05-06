import { SinglePost } from './SinglePost'
import s from './Posts.module.css'
export const List = ({ items }) => {
	return (
		<ul className={s.list}>
			{items.map(item => (
				<SinglePost key={item.id} {...item} />
			))}
		</ul>
	)
}
