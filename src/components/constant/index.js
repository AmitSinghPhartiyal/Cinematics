
export const IMDB_ICON = '../images/tmdb.png'
export const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500/'
export const YOUTUBE_PATH = 'https://www.youtube.com/watch?v='
export const METHOD = {
	generateImages: src => {
		imageSource = []
		let id = 1
		src.forEach(item => {
			if (id <= 5) {
				myObj = {
					id: id,
					imagePath: API.IMGPATH + item.file_path
				}
				id = id + 1
				imageSource.push(myObj)
			}
		})
		return imageSource
	},
  
	getForPicker: data => {
		let d = []
		data.forEach(item => {
			d.push({
				id: item.id,
				value: item.name
			})
		})
		return d
	},
  
	getYears: () => {
		let data = []
		for (i = new Date().getFullYear(); i >= 1900; i--) {
			data.push({ value: i })
		}
		return data
	}
}

export const COLORS = {
	PRIMARY:'#333',
	WHITE:'#fff',
	ACTIVE_TAB_UNDERLINE:'#76d46e'
}

export const DISPATCH = {
	NOW_PLAYING:'NOWPLAYING',
	TOP_RATED:'TOPRATED',
	POPULAR:'POPULAR',
	UP_COMING:'UPCOMING',
	AIRING_TODAY:'AIRING_TODAY',
	ON_THE_AIR:'ON_THE_AIR',
	POPULAR_TV:'POPULAR_TV',
	TOP_RATED_TV:'TOP_RATED_TV',
	POPULAR_PEOPLE:'POPULAR_PEOPLE',
	DISCOVER:'DISCOVER',
	IS_GRID:'ISGRID',
	SET_CURRENT:'SETCURRENT',
	CHANGE_PLACEHOLDER:'CHANGEPLACEHOLDER',
	REVIEW:'REVIEW',
	CAST:'CAST',
	DETAILS:'DETAILS',
	SEARCH:'SEARCH',
	PERSON_DETAIL:'PERSONDETAIL',
	PERSON_IMAGES:'PERSONIMAGES',
	PERSON_MOVIES:'PERSONMOVIES',
	MOVIE_TRAILORS:'MOVIETRAILORS',
	CHANGE:'CHANGE',
	FILTER:'FILTER',
	GENRES:'GENRES',
}
export const IMAGES = {
	APPLE:'apple.jpeg',
	IMDB:'imdb.png',
	NO_IMAGE:'noImage.svg',
	POP:'pop.jpeg',
	TMDB:'tmdb.png',
}