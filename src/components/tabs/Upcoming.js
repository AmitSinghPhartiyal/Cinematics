import React, { Component } from 'react'
import {
	View,
	Text,
	Image,
	FlatList,
	StyleSheet,
	Dimensions,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'
import { connect } from 'react-redux'
import icon from '../../images/tmdb.png'
import { bindActionCreators } from 'redux'
import CommonComponent from './CommonComponent'
import * as myActions from '../../Actions/Actions'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome' 
const imgPath = "https://image.tmdb.org/t/p/w500/"
const {width, height} = Dimensions.get('window')
class Upcoming extends Component{
	constructor(props){
    super(props); 
      this.state = {
        list:[],
        loading:true,
    }
  }
componentDidMount(){
	this.props.fetchData('https://api.themoviedb.org/3/movie/upcoming?api_key=55032e2af54d05c1326b26b0bf830b60');
}
componentWillReceiveProps = (nextProps)=>{
	this.setState({list:nextProps.list})	
}
getDetails = (item) => {
  this.props.setCurrentItem(item);
}
	render(){
		if(this.props.loading){
		 	return(
		 		<ActivityIndicator
		 			animating={true}
		 			style={{height:120,marginTop:height*0.3 }}
		 			size='large'
		 			color='#76d46e'
		 		/>
		 	)
		 }else{
			return(		
				<CommonComponent list = {this.props.list} isGrid = {this.props.isGrid}/>
			)
		}
	}
}
mapStateToProps=(state,props)=>{
	return{
		list:state.movieReducer.upcomingdata,
		loading:state.movieReducer.loading,
		isGrid:state.movieReducer.isGrid,
	}
}
mapDispatchToProps=(dispatch)=>{
	return bindActionCreators(myActions,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Upcoming);
