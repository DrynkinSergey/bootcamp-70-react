import { nanoid } from 'nanoid'

export const data = [
	{
		id: nanoid(),
		title: 'React is ease!',
		body: 'React is a JavaScript library for building user interfaces.',
		createdAt: Date.now(),
		author: 'Terry',
	},
	{
		id: nanoid(),
		title: 'Css is ease!',
		body: 'Css is a style sheet language.',
		createdAt: Date.now(),
		author: 'Perry',
	},
]
