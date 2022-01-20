import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddlware from 'redux-thunk'
import appReducer from "./app-reducer";
import homeReducer from "./home-reducer";

let reduces = combineReducers({
    homePages: homeReducer,
    app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reduces, composeEnhancers(applyMiddleware(thunkMiddlware)
  ));

window.__store__ = store

export default store