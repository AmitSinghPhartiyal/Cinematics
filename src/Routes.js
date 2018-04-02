import React, { Component } from 'react';
import Movies from './components/pages/Movies';
import Search from './components/pages/Search';
import Tvshows from './components/pages/Tvshows';
import Discover from './components/pages/Discover';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as myActions from './Actions/Actions';
import PopularPeople from './components/pages/PopularPeople';
import SidebarComponent from './components/common/SidebarComponent';
import SidebarFilter from './components/common/SidebarFilter';
import MovieDescription from './components/pages/MovieDescription';
import PeopleDescription from './components/pages/PeopleDescription';
import MoviePeopleDesc from './components/pages/MoviePeopleDesc';
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
							key="Movies"
							component={Movies}
							title="Movies"
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
