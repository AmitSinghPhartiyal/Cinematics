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
import Header from '../common/Header'
import { COLORS } from '../constant/'
import OnTheAir from '../tvTabs/OnTheAir'
import PopularTv from '../tvTabs/PopularTv'
import TopRatedTv from '../tvTabs/TopRatedTv'
import AiringToday from '../tvTabs/AiringToday'
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
						tabBarActiveTextColor = { COLORS.WHITE }
						tabBarInactiveTextColor = "#bdc3c7"
						tabBarUnderlineStyle={{ backgroundColor:  COLORS.ACTIVE_TAB_UNDERLINE} }>
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
		backgroundColor:COLORS.PRIMARY
	},
	tabView:{
		flex:0.9,
		backgroundColor:COLORS.PRIMARY
	},
	listView:{
		flex:0.8,
		backgroundColor:COLORS.WHITE,
	}
})
