import {createStore} from 'redux';
import {reducer} from './Reducer';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'persist-store',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer);

export const persistor = persistStore(store);
export default store;
