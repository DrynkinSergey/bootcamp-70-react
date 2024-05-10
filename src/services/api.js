import axios from 'axios'

axios.defaults.baseURL = 'https://dummyjson.com/'

export const fetchUsers = async () => {
	const { data } = await axios.get('users?limit=150')
	return data.users
}

export const fetchUsersById = async id => {
	const { data } = await axios.get(`users/${id}`)
	return data
}

export const fetchPostsById = async id => {
	const { data } = await axios.get(`posts/user/${id}`)
	return data.posts
}

export const fetchPostById = async id => {
	const { data } = await axios.get(`posts/${id}`)
	return data
}
