import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = "https://restcountries.com/v3.1"

const createRequest = (url) => ({url})

export const countryApi = createApi({
    reducerPath: 'countryApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getAllCountries: builder.query({
            query:  () => createRequest(`/all`)
        }),
    })
})

export const { useGetAllCountriesQuery } = countryApi