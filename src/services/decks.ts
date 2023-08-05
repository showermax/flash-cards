import { baseApi } from '../base-api.ts'

const decksApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDecks: builder.query<any, void>({
        query: () => 'v1/decks',
      }),
    }
  },
})

export const { useGetDecksQuery } = decksApi
