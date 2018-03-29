import React, { Component } from 'react'
import {
	Text,
	View,
	TextInput,
	StyleSheet,
	FlatList,
	TouchableOpacity
} from 'react-native'
import _ from 'lodash'
import { connect } from 'react-redux'
import Actors from './searchTabs/Actors'
import Movies from './searchTabs/Movies'
import TvShows from './searchTabs/TvShows'
import { bindActionCreators } from 'redux'
import * as myActions from '../Actions/Actions'
import { Actions } from 'react-native-router-flux'
import CommonComponent from './tabs/CommonComponent'
import Icon from 'react-native-vector-icons/FontAwesome'  
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view'

class Search extends Component {
	constructor(props){
		super(props)
		this.state = {
			placeholderText :'Search movie',
			searchText:'',
			searchResult:[]
		}
	}
	componentDidMount = () => {
		this.props.changePlaceholder(this.state.placeholderText);
		this.props.searchFunction(this.state.searchText);
		this.setState({placeholderText:this.props.placeholderText})
	}
	changePlaceholderState = e => {
		if(e.i == 0){
			var placeholder = "Search movie"
			this.setState({placeholderText:placeholder})
		 	this.props.searchFunction(this.state.searchText,placeholder);
		}else if(e.i == 1){
			var placeholder = 'Search person'
			this.setState({placeholderText:placeholder})
		 	this.props.searchFunction(this.state.searchText,placeholder);
		}else{
			var placeholder = 'Search tv'
			this.setState({placeholderText:placeholder})
		 	this.props.searchFunction(this.state.searchText,placeholder);
		}
		this.props.changePlaceholder(placeholder);
	}
	searchText = text => {
		 this.setState({searchText:text});
		 this.props.searchFunction(this.state.searchText,this.props.placeholderText);
	}
	componentWillReceiveProps = nextProps => {
		this.setState({searchResult:nextProps.searchResult})
	}
	render(){	
		return(	
			<View style = {{flex:1,flexDirection:'column',}}>	
				<View  style = {{flexDirection:'row',backgroundColor:"#333"}} >
					<TouchableOpacity style = { styles.backView} onPress = { () => {Actions.Home()}}>
						<Icon name = 'arrow-left' style = { styles.backIcon } />
					</TouchableOpacity>
					<View  style = { styles.searchView}>
						<Icon name = 'search' style = { styles.searchIcon }/>
					</View>
					<View  style = {{ flex:0.7,}}>
						<KeyboardAwareScrollView>
							<TextInput 
								autoFocus
								placeholder = {this.props.placeholderText.toString()}
								placeholderTextColor = '#fff'
								style = { styles.textinput }
								onChangeText = { async (text) => await this.searchText(text)}
								underlineColorAndroid = 'transparent'
							/>
						</KeyboardAwareScrollView>
					</View>
				</View>
				<View style = {{ flex:1,backgroundColor:'#333' }}> 
					<ScrollableTabView
						renderTabBar = { () => <ScrollableTabBar /> }
						tabBarActiveTextColor = "#fff" 
						tabBarInactiveTextColor = "#bdc3c7"
						tabBarUnderlineStyle={{backgroundColor: '#76d46e'}}
						onChangeTab = { (e) => { this.changePlaceholderState(e) }} >
						<Movies tabLabel="MOVIES" data = {this.props.searchResult}/>
						<Actors tabLabel="ACTORS" data = {this.props.searchResult}/>
			      		<TvShows tabLabel="TV SHOWS" data = {this.props.searchResult}/>
      				</ScrollableTabView>
				</View>
			</View>
		)
	}
}

mapStateToProps=(state,props)=>{
	return{
		placeholderText:state.movieReducer.data,
		searchResult:state.searchReducer.data,
	}
}
mapDispatchToProps=(dispatch)=>{
	return bindActionCreators(myActions,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Search);
const styles = StyleSheet.create({
	container:{
	},
	  header:{
	 		flex:0.2,
	 		flexDirection:'column',
	 		backgroundColor:'#333',
	 	},
	 	headerView:{
	 	},
	 		backView:{
	 			flex:0.2,
	 			alignItems:'center',
	 			justifyContent:'center',
	 		},
	 			backIcon:{
	 				color:'#fff',
	 				fontSize:20,
	 			},
	 		searchView:{
	 			flex:0.1,
	 			alignItems:'center',
	 			justifyContent:'center',
	 		},
	 		searchIcon:{
	 			color:"#fff",
	 			fontSize:20,
	 		},
	 			textinput:{
	 				fontSize:20,
	 				color:'#fff',
	 			},
	 	body:{
	 		flex:0.8,
	 		backgroundColor:'#fff'
	 	},
});
