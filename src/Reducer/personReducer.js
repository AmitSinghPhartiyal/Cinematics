let defaultState = { loading: true, data: [], placeholderText:'Search movie' }
export const personReducer = (state = defaultState, action) => {
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