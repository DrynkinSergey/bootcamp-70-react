export const getFilteredData = (todos, filter) => {
	switch (filter) {
		case 'all':
			return todos
		case 'active':
			return todos.filter(item => !item.completed)
		case 'completed':
			return todos.filter(item => item.completed)
		case 'liked':
			return todos.filter(item => item.liked)
		default:
			return todos
	}
}
