import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from 'state/store';
import { IUserResponse, ILoginRequest, TGameCollection } from './interfaces';

export const comeonAPI = createApi({
  reducerPath: 'comeonAPI',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:3001/',
  }),
  endpoints: (builder) => ({
    fetchGames: builder.query<unknown, TGameCollection>({ 
      query: () => 'games'
    }),
    login: builder.mutation<IUserResponse, ILoginRequest>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: { ...credentials },
      }),
    })
  }),
})

export const { useFetchGamesQuery, useLoginMutation } = comeonAPI