import { useEffect } from 'react'
import Button from '../Button/Button'
import s from './Modal.module.css'
import { motion } from 'framer-motion'

const Modal = ({ children, title = 'Default modal', onClose }) => {
	const handleBackDropClick = e => {
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

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [onClose])
	return (
		<div className={s.wrapper} onClick={handleBackDropClick}>
			<motion.div
				initial={{ opacity: 0, scale: 0, y: 400 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				exit={{ opacity: 0, y: -1000, rotate: 360, transition: { duration: 0.5 } }}
				className={s.content}
			>
				<>
					<h1>{title}</h1>
					<hr />
				</>
				<Button className={s.closeBtn} onClick={onClose}>
					×
				</Button>
				{children}
			</motion.div>
		</div>
	)
}

export default Modal
