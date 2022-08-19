import {configureStore} from '@reduxjs/toolkit';
import { cryptoApi } from '../api/crytoApi';
import { cryptoNewsApi } from '../api/newsApi';
export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]:cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]:cryptoNewsApi.reducer,
    }
})