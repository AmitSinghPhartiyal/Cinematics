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
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as myActions from '../../../Actions/Actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CommonComponent from "../../common/CommonComponent";
import { COLORS } from '../../constant';
const {width, height} = Dimensions.get('window')
class TopRatedTv extends Component{
	  constructor(props){
    super(props); 
      this.state = {
        list:[],
        loading:true,
    }
  }
componentDidMount(){
	this.props.fetchData('https://api.themoviedb.org/3/tv/top_rated?api_key=55032e2af54d05c1326b26b0bf830b60');
}
componentWillReceiveProps=(nextProps)=>{
	this.setState({list:nextProps.list})	
}
	render(){
		if(this.props.loading){
		 	return(
		 		<ActivityIndicator
		 			animating={true}
		 			style={{height:120,marginTop:height*0.3 }}
		 			size='large'
		 			color={ COLORS.ACTIVE_TAB_UNDERLINE }
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
		list:state.tvReducer.topratedtvdata,
		loading:state.tvReducer.loading,
		isGrid:state.tvReducer.isGrid,
	}
}
mapDispatchToProps=(dispatch)=>{
	return bindActionCreators(myActions,dispatch)//Dispatch action not connect to the store
}

export default connect(mapStateToProps,mapDispatchToProps)(TopRatedTv);
