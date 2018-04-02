import React, { Component } from 'react'
import { 
	View,
	Text,
	FlatList,
	TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { COLORS } from '../../constant/'
import { bindActionCreators } from 'redux'
import * as myActions from '../../../Actions/Actions'
class Reviews extends Component {
	constructor(props){
		super(props)
	} 
	render(){
		if(this.props.review){
			return(
				<View style ={{ backgroundColor:COLORS.WHITE}}>
					<FlatList
						data={ this.props.review }
						numColumns={1}
						ItemSeparatorComponent = { this.FlatListItemSeparator }
						keyExtractor={item => item.id.toString()}
						renderItem={({item,index}) =>{
	        				return(
								<View style = {{flex:1,padding:20,flexDirection:'column',borderBottomWidth:0.5,borderBottomColor:'#B5BEC6',padding:20}}>
									<View style = {{flex:7,flexDirection:'column',}} >
										<Text  style = {{color:'#000',fontSize:15,fontWeight:'bold'}}> { item.author}</Text>
									</View>
									<View style = {{flex:7,flexDirection:'column',justifyContent:'center'}} >
										<Text  style = {{color:'#000',}}> { item.content}</Text>
									</View>
								</View>
	        				)
	  					}}
		     		 />
				</View>
			)
		}else{
			return(
				<View style = {{flex:1,padding:20,}}>
					<View>
						<Text>No reviews found.</Text>
					</View>
				</View>
			)
		}	
	}
}

mapStateToProps = (state, props) => {
	return {
		review:state.movieReducer.reviewdata,
	}  
}
mapDispatchToProps = (dispatch) => {
	return bindActionCreators(myActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Reviews)