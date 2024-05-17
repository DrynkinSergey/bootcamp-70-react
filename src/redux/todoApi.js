import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todoApi = createApi({
	reducerPath: 'todoApi',
	refetchOnFocus: true,
	refetchOnReconnect: true,
	tagTypes: ['todos'],
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://6645accbb8925626f892a498.mockapi.io/',
	}),
	endpoints: builder => ({
		fetchTodos: builder.query({
			query: () => `todos`,
			providesTags: ['todos'],
		}),
		addTodo: builder.mutation({
			query: body => ({
				url: 'todos',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['todos'],
		}),
		deleteTodo: builder.mutation({
			query: id => ({
				url: `todos/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['todos'],
		}),
		toggleTodo: builder.mutation({
			query: body => ({
				url: `todos/${body.id}`,
				method: 'PUT',
				body: { ...body, completed: !body.completed },
			}),
			invalidatesTags: ['todos'],
		}),
		likeTodo: builder.mutation({
			query: body => ({
				url: `todos/${body.id}`,
				method: 'PUT',
				body: { ...body, liked: !body.liked },
			}),
			invalidatesTags: ['todos'],
		}),
		editTodo: builder.mutation({
			query: body => ({
				url: `todos/${body.id}`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: ['todos'],
		}),
	}),
})

export const {
	useFetchTodosQuery,
	useAddTodoMutation,
	useDeleteTodoMutation,
	useToggleTodoMutation,
	useEditTodoMutation,
	useLikeTodoMutation,
} = todoApi
