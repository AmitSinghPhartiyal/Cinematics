import { DISPATCH } from "../components/constant";
export function Discovernow(popdes = 'popularity.desc') {
	return dispatch => {
		fetch(
			'https://api.themoviedb.org/3/discover/movie?api_key=55032e2af54d05c1326b26b0bf830b60&language=en-US&sort_by=' +
          popdes +
          '&include_adult=false&include_video=false&page=1'
		)
			.then(response => response.json())
			.then(responseJson => {
				dispatch({ type: DISPATCH.FILTER, payload: responseJson })
			})
			.catch(error => {
				console.log(error)
			})
	}
}  
export function getGenre() {
	return dispatch => {
		fetch(
			'https://api.themoviedb.org/3/genre/movie/list?api_key=55032e2af54d05c1326b26b0bf830b60&language=en-US'
		)
			.then(response => response.json())
			.then(responseJson => {
				data = METHOD.getForPicker(responseJson.genres)
				dispatch({ type: DISPATCH.GENRES, payload: data })
			})
			.catch(function(error) {
				dispatch({ type: 'ERROR', payload: error })
			})
	}
} 
export function applyFilter(
	selectedGenre,
	from = new Date().getFullYear(),
	to = new Date().getFullYear(),
	sortBy = 'popularity.desc',
	lang = 'en-US',
	adlt = 'false',
	video = 'false',
	page = 1
) {
	return dispatch => {
		fetch(
			'https://api.themoviedb.org/3/discover/movie?api_key=55032e2af54d05c1326b26b0bf830b60&language=' +
          lang +
          '&sort_by=' +
          sortBy +
          '&include_adult=' +
          adlt +
          '&include_video=' +
          video +
          '&page=' +
          page +
          '&primary_release_date.gte=' +
          from +
          '&primary_release_date.lte=' +
          to +
          '&with_genres=' +
          selectedGenre
		)
			.then(response => response.json())
			.then(responseJson => {
                data = responseJson.results
				dispatch({
					type: DISPATCH.NOW_PLAYING,
					payload: data
				})
				Actions.Discover()
			})
			.catch(function(error) {
				dispatch({ type: 'ERROR', payload: error })
			})
	}
}
  