import React, { Component } from 'react';
import Home from './components/Home';
import Search from './components/Search';
import Tvshows from './components/Tvshows';
import Discover from './components/Discover';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as myActions from './Actions/Actions';
import PopularPeople from './components/PopularPeople';
import SidebarComponent from './components/SidebarComponent';
import SidebarFilter from './components/SidebarFilter';
import MovieDescription from './components/MovieDescription';
import PeopleDescription from './components/PeopleDescription';
import MoviePeopleDesc from './components/MoviePeopleDesc';
import { Router, Scene, Stack, Drawer } from 'react-native-router-flux';
class RouterComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			changeSidebar: false,
			sidebarPosition: false
		}
	}
	componentWillReceiveProps(nextProps) {
		this.setState({ changeSidebar: nextProps.changeSidebar })
		this.setState({ sidebarPosition: nextProps.sidebarPosition })
	}
	render() {
		console.log('Routes props', this.props)
		return (
			<Router>
				<Stack key="root">
					<Drawer
						hideNavBar
						key="drawer"
						contentComponent={
							this.props.changeSidebar ?   SidebarFilter : SidebarComponent
						}
						drawerPosition = {this.props.changeSidebar? 'right':'left'}
						drawerWidth={300}
						title="Cinematics"
					>
						<Scene
							key="Home"
							component={Home}
							title="Home"
							hideNavBar={true}
							initial
						/>
						<Scene
							key="Tvshows"
							component={Tvshows}
							title="Tvshows"
							hideNavBar={true}
						/>
						<Scene
							key="Discover"
							component={Discover}
							title="Discover"
							hideNavBar={true}
						/>
						<Scene
							key="PopularPeople"
							component={PopularPeople}
							title="PopularPeople"
							hideNavBar={true}
						/>
					</Drawer>
					<Scene
						key="Search"
						component={Search}
						title="Search"
						hideNavBar={true}
					/>
					<Scene
						key="MovieDescription"
						component={MovieDescription}
						title="MovieDescription"
						hideNavBar={true}
					/>
					<Scene
						key="PeopleDescription"
						component={PeopleDescription}
						title="PeopleDescription"
						hideNavBar={true}
					/>
					<Scene
						key="MoviePeopleDesc"
						component={MoviePeopleDesc}
						title="MoviePeopleDesc"
						hideNavBar={true}
					/>
				</Stack>
			</Router>
		)
	}
}
mapStateToProps = (state, props) => {
	return {
		changeSidebar: state.drawerReducer.changeSidebar,
		sidebarPosition: state.drawerReducer.sidebarPosition
	}
};
mapDispatchToProps = dispatch => {
	return bindActionCreators(myActions, dispatch)
};
export default connect(mapStateToProps, mapDispatchToProps)(RouterComponent)
