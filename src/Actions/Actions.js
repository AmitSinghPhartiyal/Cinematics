import { METHOD, DISPATCH } from '../components/constant/'
import { Actions } from 'react-native-router-flux'
import _ from 'lodash'
export function fetchData(uri) {
	return dispatch => {
		fetch(uri)
			.then(res => res.json())
			.then(resjson => {
				data = resjson.results
				if (uri.match(/now_playing/)) {
					dispatch({ type: DISPATCH.NOW_PLAYING, payload: data })
				} else if (uri.match(/movie\/top_rated/)) {
					dispatch({ type: DISPATCH.TOP_RATED, payload: data })
				} else if (uri.match(/upcoming/)) {
					dispatch({ type: DISPATCH.UP_COMING, payload: data })
				} else if (uri.match(/movie\/popular/)) {
					dispatch({ type: DISPATCH.POPULAR, payload: data })
				} else if (uri.match(/airing_today/)) {
					dispatch({ type: DISPATCH.AIRING_TODAY, payload: data })
				} else if (uri.match(/on_the_air/)) {
					dispatch({ type: DISPATCH.ON_THE_AIR, payload: data })
				} else if (uri.match(/tv\/popular/)) {
					dispatch({ type: DISPATCH.POPULAR_TV, payload: data })
				} else if (uri.match(/tv\/top_rated/)) {
					dispatch({ type: DISPATCH.TOP_RATED_TV, payload: data })
				} else if (uri.match(/person/)) {
					dispatch({ type: DISPATCH.POPULAR_PEOPLE, payload: data })
				} else if (uri.match(/discover/)) {
					dispatch({ type: 'DISCOVER', payload: data })
				}
			})
			.catch(error => {
				console.error('error:', error)
			})
	}
}
export function moviesView(val = true) {
	return dispatch => {
		dispatch({ type:DISPATCH.IS_GRID, payload: val })
	}
}
export function setCurrentItem(item) {
	return dispatch => {
		dispatch({ type: DISPATCH.SET_CURRENT, payload: item })
	}
}
export function changeDrawer(changeValue) {
	return dispatch => {
		dispatch({ type: DISPATCH.CHANGE, payload: changeValue })
	}
}
export function drawerFunctionBar(changeValue) {
	return dispatch => {
		dispatch({ type: DISPATCH.CHANGE, payload: changeValue })
	}
}
