import { useState } from 'react'
import Button from './../Button/Button'
import s from './Articles.module.css'
import { motion } from 'framer-motion'
export const AddArticleForm = ({ handleAddArticle }) => {
	const [title, setTitle] = useState('')
	const [body, setBody] = useState(
		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque perspiciatis facilis incidunt, ex eaque vel. Tempore fugiat, saepe officia vitae ad illum ipsum atque ab incidunt cupiditate eius quos rerum.'
	)
	const [author, setAuthor] = useState('admin')

	const handleSubmit = () => {
		handleAddArticle({ title, body, author })
	}

	return (
		<motion.div className={s.form}>
			<input className={s.input} onChange={e => setTitle(e.target.value)} type='text' placeholder='Enter title' />
			<input className={s.input} onChange={e => setBody(e.target.value)} type='text' placeholder='Enter body' />
			<input className={s.input} onChange={e => setAuthor(e.target.value)} type='text' placeholder='Enter author' />
			<Button onClick={handleSubmit}>Add</Button>
		</motion.div>
	)
}
