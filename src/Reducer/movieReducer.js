import { DISPATCH } from '../components/constant/'
let defaultState = { loading: true, data: [], placeholderText:'Search movie' }
export const movieReducer = (state = defaultState, action) => {
	console.log("REDUCER",action);
	switch (action.type) {
	case DISPATCH.NOW_PLAYING:
		return {
			...state,
			loading: false,
			nowdata: action.payload,
		}
	case DISPATCH.TOP_RATED:
		return {
			...state,
			loading: false,
			topdata: action.payload,
		}
	case DISPATCH.UP_COMING:
		return {
			...state,
			loading: false,
			upcomingdata: action.payload,
		} 
	case DISPATCH.POPULAR:
		return {
			...state,
			loading: false,
			populardata: action.payload,
		} 
	case DISPATCH.IS_GRID:
		return {
			...state,
			loading: false,
			isGrid : action.payload
		}
	case DISPATCH.SET_CURRENT:
		return {
			...state,
			loading: false,
			detail : action.payload,
		}
	case DISPATCH.REVIEW:
		return {
			...state,
			reviewdata : action.payload,
		}
	case DISPATCH.CAST:
		return {
			...state,
			castdata : action.payload,
		}
	case DISPATCH.DETAILS:
		return {
			...state,
			detaildata : action.payload,
		}
	case DISPATCH.POPULAR_PEOPLE:
		return {
			...state,
			peopledata : action.payload,
		}
	case DISPATCH.CHANGE_PLACEHOLDER:
		return {
			...state,
			loading: false,
			data : action.payload,
		}
	case DISPATCH.MOVIE_TRAILORS:
	    return {
			...state,
			loading: false,
			trailordata : action.payload,
		}
	case DISPATCH.FILTER:
	    return {
			...state,
			loading: false,
			filterdata : action.payload,
		}
	default:
		return { ...state }
	}
}