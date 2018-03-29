import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native' 
import Header from './Header'
import ScrollableTabs from './ScrollableTabs'
export default class Home extends Component{
	render(){
		return(
			<View style = { styles.homeView }>
				<View style = { styles.header }>
					<Header />
				</View>
				<View style = { styles.tabView }>
					<ScrollableTabs />
				</View>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	homeView:{
		flex:1,
		flexDirection:'column',
	},
		header:{
			flex:0.1,
			backgroundColor:"#333",
		},
		tabView:{
			flex:0.9,
			backgroundColor:"#333",
		},
}) 