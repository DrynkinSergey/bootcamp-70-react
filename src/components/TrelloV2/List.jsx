import { ListItem } from './ListItem'

export const List = ({ data, title }) => {
	return (
		<div>
			<h1>{title}</h1>
			{data.map(item => (
				<ListItem key={item.id} item={item} />
			))}
		</div>
	)
}
