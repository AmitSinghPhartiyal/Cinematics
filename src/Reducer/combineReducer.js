import { combineReducers } from 'redux'
import { movieReducer } from './movieReducer'
import { personReducer } from './personReducer'
import { searchReducer } from './searchReducer'
import { drawerReducer } from './drawerReducer'
export const rootReducer = combineReducers({
	movieReducer,
	searchReducer,
	personReducer,
	drawerReducer,
})