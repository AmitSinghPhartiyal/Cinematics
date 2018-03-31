import { DISPATCH } from '../components/constant/'
let defaultState = { loading: true, data: [], placeholderText:'Search movie' }
export const tvReducer = (state = defaultState, action) => {
	switch (action.type) {
	case DISPATCH.AIRING_TODAY:
		return {
			...state,
			loading: false,
			airingtvdata : action.payload,
		}
	case DISPATCH.ON_THE_AIR:
		return {
			...state,
			loading: false,
			onairtvdata : action.payload,
		}
	case DISPATCH.POPULAR_TV:
		return {
			...state,
			loading: false,
			populartvdata : action.payload,
		}
	case DISPATCH.TOP_RATED_TV:
		return {
			...state,
			loading: false,
			topratedtvdata : action.payload,
        }
    case DISPATCH.IS_GRID:
		return {
			...state,
			loading: false,
			isGrid : action.payload
		}
	default:
		return { ...state }
	}
}