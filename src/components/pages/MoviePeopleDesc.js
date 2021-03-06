import React, { Component } from 'react'
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	Dimensions,
	ScrollView,
	ActivityIndicator,
	TouchableOpacity,
} from 'react-native'
import PersonInfo from '../tabs/peopleTabs/PersonInfo'
import Movies from '../tabs/peopleTabs/Movies'
import TvShows from '../tabs/peopleTabs/TvShows'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as myActions from '../../Actions/person'
import Image from 'react-native-image-progress'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'  
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view'
const {width, height} = Dimensions.get('window')
import { IMAGE_PATH, COLORS } from "../constant/"
class MoviePeopleDesc extends Component{
	constructor(props){
    super(props); 
      this.state = {
       	peopleList:[],
       	loading:true,
		personDetail:[],
    }
  }
 	componentWillReceiveProps = nextProps => {
		this.setState({ personDetail: nextProps.persondata,loading:false });
	}
	componentDidMount = () => {
		this.props.getPersonDetail(this.props.peopleId);
	}
	render(){
 		if (this.state.loading) {
		return (
			<View>
				<ActivityIndicator
					animating={true}
					style={{height: 80,marginTop:height*0.4 }}
					size='large'
					color={ COLORS.ACTIVE_TAB_UNDERLINE }
				/>
			</View>
		)
 		} else {
			return(
			<View style = {{ flex:1, flexDirection:'column',}}>	
				{this.props.persondata?
					<View style = {{ flex:1, flexDirection:'column',}}>
						<View style = {{ flex:0.5,position:'relative',flexDirection:'column',}}>
							<View style = {{flex:0.2,flexDirection:'row',position:'absolute',backgroundColor:'transparent',zIndex:100,padding:10}}>
								<TouchableOpacity style = {{flex:0.8}} onPress = {() => Actions.PopularPeople()}>
									<Icon name = "arrow-left" style={{color:COLORS.WHITE,fontSize:25}}/>
								</TouchableOpacity>
								<TouchableOpacity style = {{flex:0.15,justifyContent:'center',alignItems:'center'}} onPress = {() => Actions.Movies()}>
									<Icon name = "home" style={{color:COLORS.WHITE,fontSize:25}}/>
								</TouchableOpacity>
								<TouchableOpacity style = {{flex:0.1,justifyContent:'center',alignItems:'center'}}>
									<Icon name = "ellipsis-v" style={{color:COLORS.WHITE,fontSize:25}}/>
								</TouchableOpacity>
							</View>
							<View style= {{ flex:0.7,backgroundColor:'#FEFCFD',}}>
								<Image source = {{uri :IMAGE_PATH + this.props.persondata.profile_path}} 
										style = {{ flex:1,position:'relative'}}
										indicator={ActivityIndicator}
								/>
							</View>
							<View style = {{flex:0.3,	flexDirection:'row',backgroundColor:'#12130F',justifyContent:'center',alignItems:'center'}}>
								<Text style = {{ color:COLORS.WHITE,fontSize:20,fontWeight:'bold',marginLeft:width*0.2 }}>{this.props.persondata.name}</Text>
							</View>
							<Image 	source = {{uri :IMAGE_PATH + this.props.persondata.profile_path}} 
									style = {{ width:width*0.3,height:width*0.3,position:'absolute',marginTop:height*0.3,marginLeft:width*0.05,}}
									indicator={ActivityIndicator} 
									borderRadius = {100}
							/>
						</View>
						<View style = {{flex:0.5,}}>
							<ScrollableTabView
								tabBarBackgroundColor = '#1B998B'
								renderTabBar = {() => <ScrollableTabBar />}
								tabBarActiveTextColor = { COLORS.WHITE }
								tabBarInactiveTextColor = "#82C7BF"
								tabBarUnderlineStyle={{backgroundColor: '#59B4AA'} }>
								<PersonInfo tabLabel = "INFO" personId = { this.props.persondata.id }/>
								<Movies tabLabel = "MOVIES" personId = { this.props.persondata.id }/>
								<TvShows tabLabel = "TV SHOWS" />
							</ScrollableTabView>
						</View>	
					</View>		
				:null}
			</View>		
			)
		}
	}
}
mapStateToProps=(state,props)=>{
	return{
		persondata:state.personReducer.persondata, 
	}
}
mapDispatchToProps=(dispatch)=>{
	return bindActionCreators(myActions,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(MoviePeopleDesc);
