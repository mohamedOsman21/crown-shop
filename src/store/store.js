import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
// import { thunk } from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";



const sagaMiddleWare = createSagaMiddleware();


// persist
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);



// root-reducer

const middleWares =  [process.env.NODE_ENV !== 'production' && logger, sagaMiddleWare].filter(Boolean);


const composedEnhancer = compose(applyMiddleware(...middleWares))


export const store = createStore(persistedReducer, undefined, composedEnhancer)

sagaMiddleWare.run(rootSaga);


export const persistor = persistStore(store)
