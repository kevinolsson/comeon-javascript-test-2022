import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from 'state/store';

export interface User {
  username: string
  player: {
    name: string
    avatar: string
  }
}
export interface LoginRequest {
  username: string
  password: string
}
export interface UserResponse {
  user: User
  token: string
}

export const comeonAPI = createApi({
  reducerPath: 'comeonAPI',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:3001/',
  }),
  endpoints: (builder) => ({
    fetchGames: builder.query({ 
      query: () => 'games'
    }),
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: { ...credentials },
      }),
    })
    // login: builder.query({
    //   query: (payload) => ({
    //     url: '/login',
    //     method: 'post',
    //     body: { ...payload },
    //   }),
    // }),
    // logout: builder.query({
    //   query: (username) => ({
    //     url: '/logout',
    //     method: 'post',
    //     body: { username },
    //   }),
    // })
  }),
})

export const { useFetchGamesQuery, useLoginMutation } = comeonAPI