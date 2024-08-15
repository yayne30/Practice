
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const OpportunitiesApi = createApi({
  reducerPath: 'opportunities',
  baseQuery: fetchBaseQuery({ baseUrl:"https://akil-backend.onrender.com" }),
  endpoints:(builder) =>({
    getAllOpportunitites:builder.query({
        query:(obj) =>({
            url:'/opportunities/search',
            method:'GET'
        }),
    }),
    getOpporunityById:builder.query({
      query:(id) =>({
      url: `/opportunities/${id}`,
      method:'GET'
})
}),
  }),
  
});
 

export const {useGetAllOpportunititesQuery , useGetOpporunityByIdQuery} = OpportunitiesApi