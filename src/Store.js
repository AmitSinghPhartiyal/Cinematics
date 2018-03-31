import thunk from 'redux-thunk'
import reducers from './Reducer/index'
import { createStore,applyMiddleware } from 'redux'
export default createStore(reducers, applyMiddleware(thunk))