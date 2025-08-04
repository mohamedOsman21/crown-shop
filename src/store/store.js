import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'




// persist
const persistConfig = {
    key: 'root',
    storage,
    blackList: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);



// root-reducer

const middleWares =  [logger];

const composedEnhancer = compose(applyMiddleware(...middleWares))


export const store = createStore(persistedReducer, undefined, composedEnhancer)



export const persistor = persistStore(store)
