// 'https://dummyjson.com/posts'

import axios from 'axios'

axios.defaults.baseURL = 'https://dummyjson.com/'

export const fetchPosts = async configParams => {
	// const { data } = await axios.get('posts?limit=5&page=${page}&api_key=hfk13hsdf4jasdfrh1312kdsladf&sort=desc&query=${query}') ❌
	const { data } = await axios.get('posts', {
		params: {
			limit: 5,
			...configParams,
		},
	})
	return data
}

export const fetchPostsByQuery = async configParams => {
	const { data } = await axios.get('posts/search', {
		params: {
			limit: 5,
			...configParams,
		},
	})
	return data
}
