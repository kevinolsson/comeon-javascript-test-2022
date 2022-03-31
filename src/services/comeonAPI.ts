import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const comeonAPI = createApi({
  reducerPath: 'comeonAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    fetchGames: builder.query({ 
      query: () => 'games'
    }),
    login: builder.query({
      query: (payload) => ({
        url: '/login',
        method: 'post',
        body: { ...payload },
      }),
    }),
    logout: builder.query({
      query: (username) => ({
        url: '/logout',
        method: 'post',
        body: { username },
      }),
    })
  }),
})

export const { useFetchGamesQuery, useLoginQuery, useLogoutQuery } = comeonAPI