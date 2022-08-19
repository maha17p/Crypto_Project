import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "0e16e9c954msh5606a0886172a07p1539e4jsne8434906e181",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

 const createRequest = (url) => ({url, headers:cryptoApiHeaders})

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`)
    }),
    getExchanges:builder.query({
      query:() => createRequest("/coin/Qwsogvtv82FCd/exchanges")
    })
  }),
});


export const {
    useGetCryptosQuery,
    useGetExchangesQuery
} = cryptoApi;
