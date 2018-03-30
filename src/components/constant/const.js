
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