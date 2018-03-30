import React, { Component } from 'react'
import { 
	View,
	Text,
	FlatList,
	TouchableOpacity,
	ActivityIndicator
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Image from 'react-native-image-progress'
import * as myActions from '../../Actions/Actions'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'  
import { IMAGE_PATH } from "../constant/const"
 class Cast extends Component {
	constructor(props){
		super(props)
		this.state = {
			cast:[],	
		}		
	}
	componentWillMount = () => {
			if(this.props.movieId && this.props.movieId.title){
				this.props.getCast(this.props.movieId.id,'movie')
			}else{
				this.props.getCast(this.props.movieId.id,'tv')
			}
    }
    componentWillReceiveProps(nextProps){
			this.setState({ cast: nextProps.cast })
    }
    componentWillUnmount(){

    }
	render(){
			return(
				<View style ={{ flex:1,backgroundColor:'#fff'}}>
					<FlatList
						refresh = {true}
						data={ this.props.cast}
						numColumns={1}
						ItemSeparatorComponent = { this.FlatListItemSeparator }
						keyExtractor={item => item.id.toString()}
						renderItem={({item,index}) =>{
						if(item.profile_path){
	        				return(
								<TouchableOpacity style = {{flex:1,padding:20,flexDirection:'row',borderBottomWidth:0.5,borderBottomColor:'#B5BEC6'}} onPress = {() => { Actions.MoviePeopleDesc({peopleId:item.id})}}>
									<View style = {{flex:3,flexDirection:'column',}} >
										<Image 	source = {{uri :IMAGE_PATH + item.profile_path}} 
												style = {{ borderRadius:100,width:100,height:100}} 
												indicator={ActivityIndicator}
												borderRadius = {100}/>
									</View>
									<View style = {{flex:4,flexDirection:'column',justifyContent:'center'}} >
										<Text  style = {{color:"#000",fontSize:15,fontWeight:'bold'}}> { item.name}</Text>
									</View>    
									<View style = {{flex:3,flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
										<Text  style = {{color:"#000",fontSize:10,}}> { ' as ' + item.character}</Text>
									</View>
								</TouchableOpacity>
	        				)
	  					}else{
							return(
								<TouchableOpacity style = {{flex:1,padding:20,flexDirection:'row',borderBottomWidth:0.5,borderBottomColor:'#B5BEC6'}}>
									<View style = {{flex:35,flexDirection:'column',justifyContent:'center',alignItems:'center',}} >
										<Icon name="image" style ={{fontSize:80}}/>
									</View>
									<View style = {{flex:45,flexDirection:'column',justifyContent:'center'}} >
										<Text  style = {{color:"#000",fontSize:15,fontWeight:'bold'}}> { item.name}</Text>
									</View>    
									<View style = {{flex:3,flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
										<Text  style = {{color:"#000",fontSize:10,}}>{'as' + item.character}</Text>
									</View>
								</TouchableOpacity>
							)}}}
		      		/>		
				</View>
			)	
		}
	}

mapStateToProps = (state, props) => {
  return {
		cast:state.movieReducer.castdata,
  }   
}
mapDispatchToProps = (dispatch) => {
  return bindActionCreators(myActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Cast);