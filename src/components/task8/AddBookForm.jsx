import { nanoid } from 'nanoid'
import { useState } from 'react'

export const AddBookForm = ({ createBook }) => {
	let id = nanoid()
	const [formData, setFormData] = useState({
		id: id,
		title: '',
		author: '',
		desc: '',
	})

	const submitNewBook = e => {
		e.preventDefault()
		createBook(formData)
		setFormData({
			id: id,
			title: '',
			author: '',
			desc: '',
		})
	}

	const changeInput = e => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	return (
		<div>
			<form onSubmit={submitNewBook}>
				<label>
					<span>New Book</span>
					<input value={formData.title} onChange={changeInput} placeholder='Enter book' name='title' />
				</label>

				<label>
					<span>New Book Author</span>
					<input value={formData.author} onChange={changeInput} placeholder='Enter author' name='author' />
				</label>

				<label>
					<span>New Book Description</span>
					<input value={formData.desc} onChange={changeInput} placeholder='Enter author' name='desc' />
				</label>
				<button>ADD BOOK</button>
			</form>
		</div>
	)
}
