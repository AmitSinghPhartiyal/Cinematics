import { combineReducers } from 'redux'
let defaultState = { loading: true, data: [], placeholderText:'Search movie' }
const movieReducer = (state = defaultState, action) => {
	switch (action.type) {
	case 'NOWPLAYING':
		return {
			...state,
			loading: false,
			nowdata: action.payload,
		}
	case 'TOPRATED':
		return {
			...state,
			loading: false,
			topdata: action.payload,
		}
	case 'UPCOMING':
		return {
			...state,
			loading: false,
			upcomingdata: action.payload,
		} 
	case 'POPULAR':
		return {
			...state,
			loading: false,
			populardata: action.payload,
		} 
	case 'ISGRID':
		return {
			...state,
			loading: false,
			isGrid : action.payload
		}
	case 'SETCURRENT':
		return {
			...state,
			loading: false,
			detail : action.payload,
		}
	case 'AIRINGTODAY':
		return {
			...state,
			loading: false,
			airingtvdata : action.payload,
		}
	case 'ONTHEAIR':
		return {
			...state,
			loading: false,
			onairtvdata : action.payload,
		}
	case 'POPULARTV':
		return {
			...state,
			loading: false,
			populartvdata : action.payload,
		}
	case 'TOPRATEDTV':
		return {
			...state,
			loading: false,
			topratedtvdata : action.payload,
		}
	case 'REVIEW':
		return {
			...state,
			reviewdata : action.payload,
		}
	case 'CAST':
		return {
			...state,
			castdata : action.payload,
		}
	case 'DETAILS':
		return {
			...state,
			detaildata : action.payload,
		}
	case 'POPULARPEOPLE':
		return {
			...state,
			peopledata : action.payload,
		}
	case 'CHANGEPLACEHOLDER':
		return {
			...state,
			loading: false,
			data : action.payload,
		}
	default:
		return { ...state }
	}
}
const searchReducer = (state = defaultState, action) => {
	switch(action.type) { 
	case 'SEARCH':
		return {
			...state,
			loading:false,
			data: action.payload,
		}
	default:
		return { ...state }
	}
}
const personReducer = (state = defaultState, action) => {
	switch(action.type) { 
	case 'PERSONDETAIL':
		return {
			...state,
			loading:false,
			persondata: action.payload,
		}
	case 'PERSONIMAGES':
		return {
			...state,
			loading:false,
			personImagedata: action.payload,
		}
	case 'PERSONMOVIES':
		return {
			...state,
			loading:false,
			personMoviedata: action.payload,
		}
	default:
		return { ...state }
	}
}
const rootReducer = combineReducers({
	movieReducer,
	searchReducer,
	personReducer
})
export default rootReducer;