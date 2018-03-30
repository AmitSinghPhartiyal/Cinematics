import {METHOD} from '../components/constant/const'
import { Actions } from 'react-native-router-flux'
import _ from 'lodash'
export function fetchData(uri) {
	return dispatch => {
		fetch(uri)
			.then(res => res.json())
			.then(resjson => {
				data = resjson.results
				if (uri.match(/now_playing/)) {
					dispatch({ type: 'NOWPLAYING', payload: data })
				} else if (uri.match(/movie\/top_rated/)) {
					dispatch({ type: 'TOPRATED', payload: data })
				} else if (uri.match(/upcoming/)) {
					dispatch({ type: 'UPCOMING', payload: data })
				} else if (uri.match(/movie\/popular/)) {
					dispatch({ type: 'POPULAR', payload: data })
				} else if (uri.match(/airing_today/)) {
					dispatch({ type: 'AIRINGTODAY', payload: data })
				} else if (uri.match(/on_the_air/)) {
					dispatch({ type: 'ONTHEAIR', payload: data })
				} else if (uri.match(/tv\/popular/)) {
					dispatch({ type: 'POPULARTV', payload: data })
				} else if (uri.match(/tv\/top_rated/)) {
					dispatch({ type: 'TOPRATEDTV', payload: data })
				} else if (uri.match(/person/)) {
					dispatch({ type: 'POPULARPEOPLE', payload: data })
				} else if(uri.match(/discover/)){
					dispatch({type:'DISCOVER',payload:data})
				}
			})
			.catch(error => {
				console.error('error:', error)
			})
	}
}
export function moviesView(val = true) {
	return dispatch => {
		dispatch({ type: 'ISGRID', payload: val })
	}
}
export function setCurrentItem(item) {
	return dispatch => {
		dispatch({ type: 'SETCURRENT', payload: item })
	}
}
export function changePlaceholder(placeholder) {
	return dispatch => {
		dispatch({ type: 'CHANGEPLACEHOLDER', payload: placeholder })
	}
}
export function getReview(movie_id, type) {
	return dispatch => {
		fetch(
			'https://api.themoviedb.org/3/movie/' +
        movie_id +
        '/reviews?api_key=55032e2af54d05c1326b26b0bf830b60'
		)
			.then(response => response.json())
			.then(responseJson => {
				data = responseJson.results
				dispatch({ type: 'REVIEW', payload: data })
			})
	}
}
export function getCast(movie_id, type) {
	return dispatch => {
		fetch(
			'https://api.themoviedb.org/3/' +
        type +
        '/' +
        movie_id +
        '/credits?api_key=55032e2af54d05c1326b26b0bf830b60'
		)
			.then(response => response.json())
			.then(responseJson => {
				data = responseJson.cast
				dispatch({ type: 'CAST', payload: data })
			})
	}
}
export function getMovieDetails(movie_id) {
	return dispatch => {
		fetch(
			'https://api.themoviedb.org/3/movie/' +
        movie_id +
        '?api_key=55032e2af54d05c1326b26b0bf830b60'
		)
			.then(response => response.json())
			.then(responseJson => {
				data = responseJson
				dispatch({ type: 'DETAILS', payload: data })
			})
	}
}
export function searchFunction(text, contentType = 'Search movie') {
	return dispatch => {
		let uri
		uri =
      'https://api.themoviedb.org/3/search/multi?api_key=55032e2af54d05c1326b26b0bf830b60&language=en-US&page=1&include_adult=false&query=' +
      text
		let contentArray = contentType.split(' ')
		fetch(uri)
			.then(response => response.json())
			.then(responseJson => {
				data = responseJson.results
				obj = _.filter(data, function(o) {
					if (o.media_type == contentArray[1]) {
						return o
					}
				})
				dispatch({ type: 'SEARCH', payload: obj })
			})
	}
}
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
export function getMoviesTrailors(movieId) {
	return dispatch => {
		fetch(
			'https://api.themoviedb.org/3/movie/' +
        movieId +
        '/videos?api_key=55032e2af54d05c1326b26b0bf830b60&language=en-US'
		)
			.then(response => response.json())
			.then(responseJson => {
				dispatch({ type: 'MOVIETRAILORS', payload: responseJson })
			})
			.catch(error => {
				console.log(error)
			})
	}
}
export function changeDrawer(changeValue) {
	return dispatch => {
		dispatch({ type: 'CHANGE', payload: changeValue })
	}
}
export function drawerFunctionBar(changeValue) {
	return dispatch => {
		dispatch({ type: 'CHANGE', payload: changeValue })
	}
}

export function Discovernow(popdes = 'popularity.desc') {
	return dispatch => {
		fetch(
			'https://api.themoviedb.org/3/discover/movie?api_key=55032e2af54d05c1326b26b0bf830b60&language=en-US&sort_by=' +
        popdes +
        '&include_adult=false&include_video=false&page=1'
		)
			.then(response => response.json())
			.then(responseJson => {
				dispatch({ type: 'FILTER', payload: responseJson })
			})
			.catch(error => {
				console.log(error)
			})
	}
}
export function getGenre() {
	return dispatch => {
		fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=55032e2af54d05c1326b26b0bf830b60&language=en-US')
			.then(response => response.json())
			.then(responseJson => {
				data = METHOD.getForPicker(responseJson.genres)
				dispatch({ type: 'GENRES', payload: data })
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
					type:'NOWPLAYING',
					payload:data, 
				})
				Actions.Discover()
			})
			.catch(function(error) {
				dispatch({ type: 'ERROR', payload: error })
			})
	}
}

