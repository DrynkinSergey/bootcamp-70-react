// 1.  Створили початковий стан

const initialState = {
	count: 0,
	step: 1,
}

// 2. Створили функцію редьюсер. Це головна функція по роботі з даними

export const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state
	}
}
