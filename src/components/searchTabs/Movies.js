import React ,{ Component } from 'react'
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	Dimensions,
	ActivityIndicator,
	TouchableOpacity
} from 'react-native'
import icon from '../../images/tmdb.png'
import Image from 'react-native-image-progress'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'  
const imgPath = 'https://image.tmdb.org/t/p/w500/'
const {width, height} = Dimensions.get('window')
import CommonComponent from '../tabs/CommonComponent'
export default class Movie extends Component {
	constructor(props){
		super(props)
		this.state = {
       	 loading:true,
    	}
	}
	render(){
		if(this.props.loading){
		 	return(
		 		<ActivityIndicator
		 			animating = { true }
		 			style = {{ height:120 }}
		 			size = 'large'
		 			color = '#76d46e'
		 		/>
		 	)
		 }else{
			return(
				<View style = {{flex:1,backgroundColor:'#fff',}}>
					<FlatList
						data={ this.props.data }
						numColumns={ 1 }
						ItemSeparatorComponent = { this.FlatListItemSeparator }
						keyExtractor={item => item.id.toString()}
						key={`${this.props.isGrid?item=>item.id :item=>item.id*0.3 }`}
						renderItem={({item,index}) =>{
							return(
								<TouchableOpacity style = {{flex:1}} onPress = {() => { Actions.MovieDescription({movie:item})}}>
									<View style = {{flex:1,padding:10,flexDirection:'row',borderBottomWidth:0.5,borderBottomColor:'#B5BEC6'}}>
										<View style = {{flex:3 }}>
											<Image 	source = {{uri :imgPath + item.poster_path}} 
												style = {{width:width*0.2,height:height*0.2 }}
												indicator={ActivityIndicator} />     
										</View>
										<View style = {{flex:7,flexDirection:'column'}} >
											<View style = {{flex:7}}>
												<View style = {{}}> 
													<Text numberOfLines = {3} style = {{color:'#000',}}> { item.release_date }</Text>
												</View>
												<View style = {{}}>
													<Text numberOfLines = {3} style = {{color:'#000',fontSize:15,fontWeight:'bold'}}> { item.title?item.title:item.name }</Text>
												</View>
											</View>
											<View style = {{flex:3,flexDirection:'row'}}>
												<View style = {{flex:0.2}}>
													<Icon name = "imdb" style = {{ fontSize:30,color:'green'}} />
												</View>
												<View style = {{flex:0.8}}>
													<Text style = {{color:'#000',}}> { item.vote_average }</Text>
												</View>
											</View>
										</View>
									</View>
								</TouchableOpacity>
							)}}
	      			/>
				</View>	
			)
		}
	}
}