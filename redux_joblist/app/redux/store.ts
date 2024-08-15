import {setupListeners} from '@reduxjs/toolkit/query'
import { OpportunitiesApi } from './service/dummy';
import {configureStore} from "@reduxjs/toolkit"
export const store = configureStore({
    reducer:{
      [OpportunitiesApi.reducerPath]: OpportunitiesApi.reducer

    },
    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware().concat(OpportunitiesApi.middleware)

})
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;