import React , {Component} from 'react'
import { 
	Text,
	View,
	StyleSheet,
	TouchableOpacity, 
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { COLORS } from '../constant/'
import * as myActions from '../../Actions/Actions'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'  
 class Header extends Component{
	constructor(props){
		super(props)
		this.state = {
			isGrid : true,
		}
	}
	changeView  = () => {
		this.setState({ isGrid:!this.state.isGrid })
		this.props.moviesView(this.state.isGrid);
	}
	render(){
		return(
			<View style = { styles.headerView }>
				<View style = { styles.burgerView}>
					<TouchableOpacity onPress = {() => { Actions.drawerOpen() }}>
						<Icon name = "bars" style = { styles.barIcon }/>
					</TouchableOpacity>
				</View>
				<View style = { styles.appNameView}>
					<Text style = { styles.appNameText}>Cinematics</Text>
				</View>
				<View style = { styles.gridView}>
					<TouchableOpacity onPress = {() => {this.changeView()}}>
						<Icon name = {this.state.isGrid ? 'list-ul' : 'th'}  style = { styles.thIcon } />
					</TouchableOpacity>
				</View>
				<View style = { styles.searchIconView}>
					<TouchableOpacity onPress = { () => Actions.Search() }>
						<Icon name="search" style = { styles.searchIcon }/>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}
mapStateToProps=(state,props)=>{
	return{
		isGrid:state.movieReducer.isGrid
	}
}
mapDispatchToProps=(dispatch)=>{
	return bindActionCreators(myActions,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
const styles = StyleSheet.create({
	headerView:{
		flex:1,
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'center',
	},
		burgerView:{
			flex:0.2,
			alignItems:'center',
		},
			appNameText:{
				color:COLORS.WHITE,
				fontSize:20,
			},
			barIcon:{
				color:COLORS.WHITE,
				fontSize:20,
			},
			thIcon:{
				color:COLORS.WHITE,
				fontSize:20,
			},
			searchIcon:{
				color:COLORS.WHITE,
				fontSize:20,
			},
		appNameView:{
			flex:0.5,
		},
		gridView:{
			flex:0.15,
			alignItems:'center',
		},
		searchIconView:{
			flex:0.15,
			alignItems:'center',
		}
}) 
