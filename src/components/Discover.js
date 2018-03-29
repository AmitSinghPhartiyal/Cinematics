import React ,{ Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import Header from './Header'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as myActions from '../Actions/Actions'
import { Actions } from 'react-native-router-flux'
import CommonComponent from './tabs/CommonComponent'
import Icon from 'react-native-vector-icons/FontAwesome'  
 class Discover extends Component {
	constructor(props){
		super(props)
		this.state = {
			list:[],
			loading:true,
			isGrid : true ,
		}
	}
	componentDidMount(){
		this.props.fetchData('https://api.themoviedb.org/3/discover/movie?api_key=55032e2af54d05c1326b26b0bf830b60');
	}
	changeView  = () => {
		this.setState({ isGrid:!this.state.isGrid })
		this.props.moviesView(this.state.isGrid);
	}
  render(){
    return(
      <View style = {{flex:1,backgroundColor:'#fff'}}>
      	<View style = {{flex:1,flexDirection:'column',}}>
			<View style = {{flex:0.025,flexDirection:'row',backgroundColor:'#333',padding:20}}>		
				<View style = {{flex:0.2,alignItems:'center'}}>
					<TouchableOpacity onPress = {() => { Actions.drawerOpen() }}>
						<Icon name="bars"	style = {{ color:'#fff',fontSize:20,}}/>
					</TouchableOpacity>
				</View>
				<View style = {{flex:0.4,alignItems:'center',justifyContent:'center'}}>
						<Text style = { {color:'#fff',fontSize:20,}}>Discover</Text>		
				</View>
				<View style = {{flex:0.15,alignItems:'center',}}>
					<TouchableOpacity >
						<Icon name = 'filter'  style = {{ color:'#fff',fontSize:20,}} />
					</TouchableOpacity>	
				</View>
				<View style = {{flex:0.15,alignItems:'center',}}>
					<TouchableOpacity>
						<Icon name = 'sort'  style = {{ color:'#fff',fontSize:20,}} />
					</TouchableOpacity>	
				</View>
				<View style = {{flex:0.1,alignItems:'center',}}>
					<TouchableOpacity onPress = {() => {this.changeView()}}>
						<Icon name = {this.state.isGrid ? 'list-ul' : 'th'} style = {{ color:'#fff',fontSize:20,}} />
					</TouchableOpacity>	
				</View>
			</View>
			<View style = {{ flex:0.975}}>
				<CommonComponent list = {this.props.list} isGrid = {this.props.isGrid}/>
			</View>
		</View>			
      </View>
    )
  }
}
mapStateToProps=(state,props)=>{
	return{
		list:state.movieReducer.nowdata,
		loading:state.movieReducer.loading,
		isGrid:state.movieReducer.isGrid,
	}
}
mapDispatchToProps=(dispatch)=>{
	return bindActionCreators(myActions,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Discover);