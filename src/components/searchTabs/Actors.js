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
import CommonComponent from '../tabs/CommonComponent'
import Icon from 'react-native-vector-icons/FontAwesome'  
const imgPath = 'https://image.tmdb.org/t/p/w500/'
const {width, height} = Dimensions.get('window')
export default class Actors extends Component {
	constructor(props){
		super(props)
		this.state = {
       	 loading:true,
    	}
	}
	render(){
		return(
			<View style ={{ flex:1,backgroundColor:'#fff'}}>
				<FlatList
					refresh = {true}
					data={ this.props.data}
					numColumns={1}
					ItemSeparatorComponent = { this.FlatListItemSeparator }
					keyExtractor={item => item.id.toString()}
					renderItem={({item,index}) =>{
						if(item.profile_path){
							return(
								<TouchableOpacity style = {{flex:1,padding:20,flexDirection:'row',borderBottomWidth:0.5,borderBottomColor:'#B5BEC6'}}>
									<View style = {{flex:2,flexDirection:'column',}} >
										<Image 	source = {{uri :imgPath + item.profile_path}} 
											style = {{ borderRadius:100,width:100,height:100}} 
											indicator={ActivityIndicator}
											borderRadius = {100}
										/>
									</View>
									<View style = {{flex:4,flexDirection:'column',justifyContent:'center',alignItems:'flex-start'}} >
										<Text  style = {{color:'#000',fontSize:15,fontWeight:'bold'}}> { item.name}</Text>
									</View>    
								</TouchableOpacity>
							)
	  					}else{
	  						return(
								<TouchableOpacity style = {{flex:1,padding:20,flexDirection:'row',borderBottomWidth:0.5,borderBottomColor:'#B5BEC6'}}>
									<View style = {{flex:2,flexDirection:'column',justifyContent:'center',alignItems:'center',}} >
										<Icon name="image" style ={{fontSize:80}}/>
									</View>
									<View style = {{flex:4,flexDirection:'column',justifyContent:'center'}} >
										<Text  style = {{color:'#000',fontSize:15,fontWeight:'bold'}}> { item.name}</Text>
									</View>    
								</TouchableOpacity>
	        				)}
	  					}}
		      		/>		
			</View>
		)
	}
}