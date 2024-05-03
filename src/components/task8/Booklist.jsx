import { useState } from 'react'
import { AddBookForm } from './AddBookForm'
import { Book } from './Book'

export const Booklist = () => {
	const [books, setBooks] = useState([
		{ title: 'Book1', author: 'author1', desc: 'desc1' },
		{ title: 'Book2', author: 'author2', desc: 'desc2' },
	])

	const createBook = data => {
		setBooks(prev => [...prev, data])
	}
	return (
		<>
			<AddBookForm createBook={createBook} />
			<ul>
				{books.map(book => (
					<Book key={book.id} {...book} />
				))}
			</ul>
		</>
	)
}
