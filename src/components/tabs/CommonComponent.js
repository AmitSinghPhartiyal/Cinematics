import React ,{Component} from 'react'
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	Dimensions,
	RefreshControl,
	ActivityIndicator,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'  
import { Actions } from 'react-native-router-flux'
import Image from 'react-native-image-progress'
import icon from '../../images/tmdb.png'
const imgPath = "https://image.tmdb.org/t/p/w500/"
const {width, height} = Dimensions.get('window')
export default class CommonComponent extends Component{
	constructor(props) {
    super(props);
    this.state = {
    	refreshing:false
    };
  }  
 	_onRefresh() {
	  this.setState({
	    refreshing: true
	  })
	  setTimeout(function() {
	    this.setState({
	      refreshing: false
	    })
	  }.bind(this),1000)
	}	
	render(){
		return(
			<View style = {{flex:1,backgroundColor:'#fff',}}>
				<FlatList
          data={ this.props.list }
          numColumns={ this.props.isGrid?1:3 }
          ItemSeparatorComponent = { this.FlatListItemSeparator }
          keyExtractor={item => item.id.toString()}
          key={`${this.props.isGrid?item=>item.id :item=>item.id*0.3 }`}
          refreshControl={
 					 <RefreshControl
    					refreshing={this.state.refreshing}
    					onRefresh={this._onRefresh.bind(this)}
  					/>
					}
          renderItem={({item,index}) =>{
          if(this.props.isGrid){
          	return(
	           	<TouchableOpacity style = {{flex:1}} onPress = {() => { Actions.MovieDescription({movie:item})}}>
	           		<View style = {{flex:1,padding:10,flexDirection:'row',borderBottomWidth:0.5,borderBottomColor:'#B5BEC6'}}>
	             		<View style = {{flex:3 }}>
	             			<Image 	source = {{uri :imgPath + item.poster_path}} 
	             							style = {{width:width*0.2,height:height*0.2 }}
	             							indicator={ActivityIndicator} />     
	                </View>
	                <View style = {{flex:7,flexDirection:'column'}} >
	                	<View style = {{flex:7}}>
	                  	<View style = {{}}> 
	                  		<Text numberOfLines = {3} style = {{color:"#000",}}> { item.release_date }</Text>
	                  	</View>
	                  	<View style = {{}}>
	                  		<Text numberOfLines = {3} style = {{color:"#000",fontSize:15,fontWeight:'bold'}}> { item.title?item.title:item.name }</Text>
	                  	</View>
	                  </View>
	                  <View style = {{flex:3,flexDirection:'row'}}>
	                  	<View style = {{flex:0.2}}>
	                  			<Icon name = "imdb" style = {{ fontSize:30,color:'green'}} />
	                  	</View>
	                  	<View style = {{flex:0.8}}>
	                  		<Text style = {{color:"#000",}}> { item.vote_average }</Text>
	                  	</View>
	                  </View>
	                </View>
	              </View>
	           	</TouchableOpacity>
          	)
          }else{
          	return(
          	 	<TouchableOpacity style = {{flex:1,}} onPress = {() => { Actions.MovieDescription({movie:item})}}>
             		<View style = {{	flex:0.6,padding:10,flexDirection:'column',}}>
               		<View style = {{ flex:1,}}>
               			<Image 
               				source = {{uri :imgPath + item.poster_path}} 
               				style = {{ width:width*0.3, height:height*0.3}}
               				indicator={ActivityIndicator}/>     
                  </View>
                  <View style = {{flex:1,flexDirection:'row',padding:5,backgroundColor:"#E8E9EB",height:height*0.1,width:width*0.3}} >
                  	<View style = { {flex:0.9,flexWrap:'wrap',padding:2,} }> 
                  		<Text numberOfLines = {3} style = {{color:"#000",}}> { item.title?item.title:item.name }</Text>
                  	</View>
                  	<View style = {{flex:0.1,alignItems:'center',} }>
                  		<Icon name = "ellipsis-v"/>
                  	</View>
                  </View>
                </View>
           		</TouchableOpacity>
           	)
          }       
        }
      }
      />
		</View>	
		)
	}
}