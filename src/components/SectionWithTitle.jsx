export const SectionWithTitle = ({ title, children }) => {
	return (
		<div>
			<h2>{title}</h2>
			<div className='content'>{children}</div>
		</div>
	)
}
