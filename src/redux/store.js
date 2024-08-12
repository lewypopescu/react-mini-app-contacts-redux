import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import persistedReducer from './persist';

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
