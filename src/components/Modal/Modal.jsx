import { useEffect } from 'react'
import Button from '../Button/Button'
import s from './Modal.module.css'
const Modal = ({ children, title = 'Default modal', onClose }) => {
	const handleBackDropClick = e => {
		// console.log('TARGET :>>>>>>>', e.target)
		// console.log('CURRENT TARGET :>>>>>>', e.currentTarget)
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	useEffect(() => {
		const handleKeyDown = e => {
			if (e.key === 'Escape') {
				onClose()
			}
		}
		document.addEventListener('keydown', handleKeyDown)

		const intervalID = setInterval(() => {
			console.log(new Date().toLocaleTimeString())
		}, 1000)

		const timeoutId = setTimeout(() => {
			console.log('TADADADAM')
		}, 3000)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
			clearInterval(intervalID)
			clearTimeout(timeoutId)
			console.log('Modal was closed')
		}
	}, [onClose])
	return (
		<div className={s.wrapper} onClick={handleBackDropClick}>
			<div className={s.content}>
				<>
					<h1>{title}</h1>
					<hr />
				</>
				<Button className={s.closeBtn} onClick={onClose}>
					×
				</Button>
				{children}
			</div>
		</div>
	)
}

export default Modal
