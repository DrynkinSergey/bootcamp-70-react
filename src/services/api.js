// 'https://dummyjson.com/posts'

import axios from 'axios'

axios.defaults.baseURL = 'https://dummyjson.com/'

export const fetchPosts = async () => {
	const { data } = await axios.get('posts')
	return data
}
