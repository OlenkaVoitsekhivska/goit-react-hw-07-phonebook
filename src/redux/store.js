import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import contactsReducer from '../redux/contacts/contacts-reducers';
import { contactsApi } from './contacts-Api';



 const store = configureStore({
  reducer: {
    contacts:contactsReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch)




export default store;
