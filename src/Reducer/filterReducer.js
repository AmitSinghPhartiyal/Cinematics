let defaultState = {
	data: [],
	genre: '',
	from: new Date().getFullYear(),
	to: new Date().getFullYear()
}
export const filterReducer = (state = defaultState, action) => {
	switch (action.type) {
	case 'FILTER':
		return {
			...state,
			data: action.payload.data,
			genre: action.payload.genre,
			from: action.payload.from,
			to: action.payload.to
		}
	case 'GENRES':
		return {
			...state,
			genres: action.payload
		}
	case 'ERROR':
		return {
			...state,
			data: action.payload
		}
	case 'DISCOVER':
		return {
			...state,
			data: action.payload, 
		}
	default:
		return {
			...state
		}
	}
}
