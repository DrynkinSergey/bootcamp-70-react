import { nanoid } from 'nanoid'
import Button from './../Button/Button'
import { useState } from 'react'
export const AddArticle = ({ addArticle, setSelectedTab }) => {
	const [title, setTitle] = useState('')
	const [body, setBody] = useState(
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum pariatur sint quasi dolor temporibus excepturi ullam earum quas perspiciatis amet. Esse tempore tempora alias amet earum nam qui consequatur dicta?'
	)
	const [author, setAuthor] = useState('')

	const handleAdd = () => {
		addArticle({ id: nanoid(), title, isFavorite: false, body, author, createdAt: new Date() })
		setTimeout(() => {
			setSelectedTab('home')
		}, 1000)
	}
	return (
		<div>
			<h2>Add Article</h2>
			<div>
				<label>
					Title
					<input onChange={e => setTitle(e.target.value)} required />
				</label>
				<label>
					Body
					<input onChange={e => setBody(e.target.value)} required />
				</label>
				<label>
					Author
					<input onChange={e => setAuthor(e.target.value)} required />
				</label>
				<Button onClick={handleAdd}>Add Article</Button>
			</div>
		</div>
	)
}
