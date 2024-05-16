# createAsyncThunk

## Створення

- Готовий результат

```
export const deleteTodoThunk = createAsyncThunk('todos/Delete', async (id, thunkApi) => {
	try {
		const { data } = await axios.delete(`todos/${id}`)
		return data.id
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})
```

- Псевдо код

```
export const deleteTodoThunk = createAsyncThunk('назва_типу_екшену', async (параметр1, параметр2) => {
	try {
		запит
		return данні з запиту
	} catch (error) {
		return повернення помилки
	}
})
```

- `назва_типу_екшену` - Передаємо назву для типу екшену санки. Ця назва використовується в редакст девтулзах, може бути довільною, але не сходити на інші
- `параметр1` - данні, які приходять від компонента. Може бути як `body, id, todo, title`, також може не містити перший параметр. Тоді пишемо `_`.
- `параметр2` - thunkApi - набір інструментів для роботи. Там знаходиться `rejectWithValue`, `dispatch`, `getState`

- `запит`: прописується запит на сервер через await
- `віддіча запиту` : віддаємо результат з санки як пейлоад до слайсу
- `повернення помилки` : використовуєть thunkApi.rejectWithValue(error.message) - повідомляємо про помилку як пейлоад в слайс

### ПІСЛЯ ТОГО ЯК МИ ПОВЕРНУЛИ ЩОСЬ З САНКИ - ЙДЕМО ДО СЛАЙСУ!!!

### В СЛАЙСІ СТВОРЮЄМО ЕКСТРА РЕДЬЮСЕРИ І ТАМ ОБРОБЛЯЄМО НАШІ САНКИ

```
extraReducers: builder => {
		builder
			.addCase(fetchTodosThunk.fulfilled, (state, { payload }) => {
				state.todos = payload
			})
			.addCase(deleteTodoThunk.fulfilled, (state, { payload }) => {
				state.todos = state.todos.filter(item => item.id !== payload)
			})


			.addMatcher(
				isAnyOf(
					fetchTodosThunk.pending,
					likeTodoThunk.pending,
					toggleTodoThunk.pending,
					editTodoThunk.pending,
					deleteTodoThunk.pending
				),
				state => {
					state.error = false
					state.isLoading = true
				}
			)
			.addMatcher(
				isAnyOf(
					fetchTodosThunk.rejected,
					likeTodoThunk.rejected,
					toggleTodoThunk.rejected,
					editTodoThunk.rejected,
					deleteTodoThunk.rejected
				),
				state => {
					state.isLoading = false
					state.error = true
				}
			)
			.addMatcher(
				isAnyOf(
					fetchTodosThunk.fulfilled,
					likeTodoThunk.fulfilled,
					toggleTodoThunk.fulfilled,
					editTodoThunk.fulfilled,
					deleteTodoThunk.fulfilled
				),
				state => {
					state.isLoading = false
				}
			)
	},
```

- addMatcher дає можливість використати одні і ті самі події в більш правильному вигляді не створюючи додаткові `addCase`
