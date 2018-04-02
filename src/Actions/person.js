export function getPersonDetail(personId) {
	return dispatch => {
		fetch(
			'https://api.themoviedb.org/3/person/' +
        personId +
        '?api_key=55032e2af54d05c1326b26b0bf830b60&language=en-US'
		)
			.then(response => response.json())
			.then(responseJson => {
				data = responseJson
				dispatch({ type: 'PERSONDETAIL', payload: data })
			})
	}
}
export function getPersonImages(personId) {
	return dispatch => {
		fetch(
			'https://api.themoviedb.org/3/person/' +
        personId +
        '/images?api_key=55032e2af54d05c1326b26b0bf830b60'
		)
			.then(response => response.json())
			.then(responseJson => {
				data = responseJson
				dispatch({ type: 'PERSONIMAGES', payload: data })
			})
	}
}
export function getPersonMovies(personId) {
	return dispatch => {
		fetch(
			'https://api.themoviedb.org/3/person/' +
        personId +
        '/movie_credits?api_key=9a2955322d7a5fbef5b01d4e52abc0ff&language=en-US'
		)
			.then(response => response.json())
			.then(responseJson => {
				dispatch({ type: 'PERSONMOVIES', payload: responseJson })
			})
			.catch(error => {
				console.log(error)
			})
	}
}