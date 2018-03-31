import { combineReducers } from 'redux'
import { movieReducer } from './movieReducer'
import { personReducer } from './personReducer'
import { searchReducer } from './searchReducer'
import { drawerReducer } from './drawerReducer'
import { filterReducer } from './filterReducer'
import { tvReducer } from './tvReducer'
export const rootReducer = combineReducers({
	movieReducer,
	searchReducer,
	personReducer,
	drawerReducer,
	filterReducer,
	tvReducer,

})