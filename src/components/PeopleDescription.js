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
import PersonInfo from './peopleTabs/PersonInfo'
import Movies from './peopleTabs/Movies'
import TvShows from './peopleTabs/TvShows'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as myActions from '../Actions/Actions'
import Image from 'react-native-image-progress'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'  
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view'
const {width, height} = Dimensions.get('window')
const imgPath = "https://image.tmdb.org/t/p/w500/"
class PeopleDescription extends Component{
	constructor(props){
    super(props); 
      this.state = {
       peopleList:[],
       loading:true,
    }
  }
 	componentWillReceiveProps = nextProps => {
		this.setState({peopleDetail:nextProps.peopleDetail})
	}	
	render(){
		console.log("Parent props",this.porps)
 		if (this.props.loading) {
      return (
        <View style={styles.ActivityIndicatorContainer}>
          <ActivityIndicator
            animating={true}
            style={{height: 80, }}
            size='large'
            color='#76d46e'
          />
        </View>
      )
 		} else {
			return(
					<View style = {{ flex:1, flexDirection:'column',}}>
						<View style = {{ flex:0.5,position:'relative',flexDirection:'column',}}>
							<View style = {{flex:0.2,flexDirection:'row',position:'absolute',backgroundColor:'transparent',zIndex:100,padding:10}}>
								<TouchableOpacity style = {{flex:0.8}} onPress = {() => Actions.PopularPeople()}>
									<Icon name = "arrow-left" style={{color:'#fff',fontSize:25}}/>
								</TouchableOpacity>
								<TouchableOpacity style = {{flex:0.15,justifyContent:'center',alignItems:'center'}} onPress = {() => Actions.Home()}>
									<Icon name = "home" style={{color:'#fff',fontSize:25}}/>
								</TouchableOpacity>
								<TouchableOpacity style = {{flex:0.1,justifyContent:'center',alignItems:'center'}}>
									<Icon name = "ellipsis-v" style={{color:'#fff',fontSize:25}}/>
								</TouchableOpacity>
							</View>
							<View style= {{ flex:0.8,backgroundColor:'#FEFCFD',}}>
								<Image source = {{uri :imgPath + this.props.peopleProp.known_for[0].backdrop_path}} 
												 style = {{ flex:1,position:'relative'}}
												 indicator={ActivityIndicator}
									 />
							</View>
							<View style = {{flex:0.2,	flexDirection:'row',backgroundColor:'#12130F',justifyContent:'center',alignItems:'center'}}>
									<Text style = {{ color:'#fff',fontSize:20,fontWeight:'bold',marginLeft:width*0.1 }}>{this.props.peopleProp.name}</Text>
							</View>
							<Image 	source = {{uri :imgPath + this.props.peopleProp.profile_path}} 
											style = {{ width:width*0.3,height:width*0.3,position:'absolute',marginTop:height*0.3,marginLeft:width*0.05,}}
											indicator={ActivityIndicator} 
											borderRadius = {100}
							/>
						</View>
						<View style = {{flex:0.5,}}>
							<ScrollableTabView
									tabBarBackgroundColor = '#1B998B'
									renderTabBar = {() => <ScrollableTabBar />}
									tabBarActiveTextColor = "#fff" 
									tabBarInactiveTextColor = "#82C7BF"
									tabBarUnderlineStyle={{backgroundColor: '#59B4AA'} }>
					        <PersonInfo tabLabel = "INFO"  personId = { this.props.peopleProp.id } personImage = {this.props.personImage}/>
					        <Movies tabLabel = "MOVIES" personId = {this.props.peopleProp.id }  />
					        <TvShows tabLabel = "TV SHOWS" />
								</ScrollableTabView>
						</View>	
					</View>		
			)
		}
	}
}
mapStateToProps=(state,props)=>{
	return{
	}
}
mapDispatchToProps=(dispatch)=>{
	return bindActionCreators(myActions,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(PeopleDescription);
