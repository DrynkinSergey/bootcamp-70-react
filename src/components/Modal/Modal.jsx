import css from './Modal.module.css'
export const Modal = ({ title, children }) => {
	return (
		<div>
			<h1 className={css.title}>{title}</h1>
			<div>{children}</div>
		</div>
	)
}
