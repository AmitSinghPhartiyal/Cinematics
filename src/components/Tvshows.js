import  React,{ Component } from 'react'
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
import Header from './Header'
import OnTheAir from './tvTabs/OnTheAir'
import PopularTv from './tvTabs/PopularTv'
import TopRatedTv from './tvTabs/TopRatedTv'
import ScrollableTabs from './ScrollableTabs'
import AiringToday from './tvTabs/AiringToday'
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view'
export default class Tvshows extends Component{
	render(){
		return(
			<View style = { styles.homeView }>
				<View style = { styles.header }>
					<Header />
				</View>
				<View style = { styles.tabView }>
					<ScrollableTabView
						renderTabBar = { () => <ScrollableTabBar /> }
						tabBarActiveTextColor = "#fff" 
						tabBarInactiveTextColor = "#bdc3c7"
						tabBarUnderlineStyle={{backgroundColor: '#76d46e'} }>
						<AiringToday tabLabel="AIRING TODAY" />
						<OnTheAir tabLabel="ON THE AIR" />
						<PopularTv tabLabel="POPULAR" />
						<TopRatedTv tabLabel="TOP RATED" />
					</ScrollableTabView>
				</View>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	homeView:{
		flex:1,
		flexDirection:'column'
	},
	header:{
		flex:0.1,
		backgroundColor:'#333'
	},
	tabView:{
		flex:0.9,
		backgroundColor:'#333'
	},
	listView:{
		flex:0.8,
		backgroundColor:'#fff',
	}
})
