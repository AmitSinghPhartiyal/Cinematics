import React, { Component } from 'react'
import Home from './components/Home'
import Search from './components/Search'
import Tvshows from './components/Tvshows'
import Discover from './components/Discover'
import PopularPeople from './components/PopularPeople'
import FilterComponent from './components/FilterComponent'
import SidebarComponent from './components/SidebarComponent'
import MovieDescription from './components/MovieDescription'
import PeopleDescription from './components/PeopleDescription'
import MoviePeopleDesc from './components/MoviePeopleDesc'
import { Router, Scene, Stack, Drawer } from 'react-native-router-flux'
export default class RouterComponent extends Component{
	render(){
		return(
			<Router>
				<Stack key="root">
					<Drawer
            hideNavBar
            key="drawer"
            contentComponent={SidebarComponent}
            drawerWidth={300}
            title="Cinematics"
					>
						<Scene 
							key = "Home" 
							component={ Home } 
							title="Home" 
							hideNavBar = { true }
							initial		
						/>
					<Scene 
						key = "Tvshows" 
						component={ Tvshows } 
						title="Tvshows" 
						hideNavBar = { true }					
					/>
					<Scene 
						key = "Discover" 
						component={ Discover } 
						title="Discover" 
						hideNavBar = { true }							
					/>
						<Scene 
						key = "PopularPeople" 
						component={ PopularPeople} 
						title="PopularPeople" 
						hideNavBar = { true }	
					/>
				</Drawer>	
					<Scene
						key="Search"
						component= { Search }
						title = "Search"
						hideNavBar = { true }	
					/>
					<Scene
						key="MovieDescription"
						component= { MovieDescription }
						title = "MovieDescription"
						hideNavBar = { true }								
					/>
					<Scene
						key="PeopleDescription"
						component= { PeopleDescription }
						title = "PeopleDescription"
						hideNavBar = { true }								
					/>
						<Scene
						key="MoviePeopleDesc"
						component= { MoviePeopleDesc}
						title = "MoviePeopleDesc"
						hideNavBar = { true }								
					/>				
				</Stack>
			</Router>
		)
	}
}