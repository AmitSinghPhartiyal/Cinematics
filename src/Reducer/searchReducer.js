let defaultState = { loading: true, data: [], placeholderText:'Search movie' }
export const searchReducer = (state = defaultState, action) => {
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