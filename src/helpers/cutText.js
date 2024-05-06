export const cutText = (str, len = 180) => {
	return str.length > 100 ? str.slice(0, len) + '...' : str
}
