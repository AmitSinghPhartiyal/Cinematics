import React, { Component } from 'react'
import {
	View,
	Text,
	FlatList,
	Dimensions,
	ScrollView,
	TouchableOpacity,
	ActivityIndicator
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Image from 'react-native-image-progress'
import * as myActions from '../../Actions/Actions'
import Icon from 'react-native-vector-icons/FontAwesome'
const { width, height } = Dimensions.get('window')
import { IMAGE_PATH } from "../constant/const"
class PersonInfo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			personDetail: [],
			loading: true,
			personImage: []
		}
	}
	componentWillMount = () => {
		this.props.getPersonDetail(this.props.personId);
		this.props.getPersonImages(this.props.personId);
	}
	componentWillReceiveProps(nextProps) {
		this.setState({ personDetail: nextProps.persondata })
		this.setState({ personImage: nextProps.peopleImage })
	}
	render() {
		console.log("Perosn INfo", this.props)
		if (this.props.loading) {
			return (
				<View style={styles.ActivityIndicatorContainer}>
					<ActivityIndicator
						animating={true}
						style={{ height: 80, }}
						size='large'
						color='black'
					/>
				</View>
			)
		} else {
			return (
				<View style={{ flex: 1, backgroundColor: '#fff' }}>
					{this.props.persondata ?
						<ScrollView>
							<Text style={{ color: 'black', padding: 10, fontSize: 15, marginLeft: width * 0.01 }} numberOfLines={4}>{this.props.persondata.biography}</Text>
							<Text style={{ color: 'black', padding: 2, marginTop: width * 0.01, marginLeft: width * 0.03 }}><Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }}>Born:</Text>{this.props.persondata.birthday}</Text>
							<Text style={{ color: 'black', padding: 2, marginLeft: width * 0.03, marginBottom: width * 0.02 }}><Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }}>Birthplace:</Text>{this.props.persondata.place_of_birth}</Text>
							<View style={{ flex: 1,backgroundColor:'#E8E9EB',padding:20 }}>
								<Text style = {{ fontSize:15,marginLeft:width*0.02}}>Images</Text>
								{this.props.personImage && this.props.personImage.profiles ?
									<FlatList
										data={this.props.personImage.profiles}
										horizontal={true}
										keyExtractor={item => item.file_path} 
										key={`${item => item.file_path}`}
										numColumns={1}
										renderItem={({ item }) => {
											return(
												<View style={{ flex:1,alignItems:'center',flexWrap: 'wrap',justifyContent:'center',padding:10}} key = {item.file_path}>
											  		<Image source={{ uri: IMAGE_PATH + item.file_path}} style={{width:width*0.3, height:height*0.3,padding:10}} />
                      							</View>
                     						)
										}}
									/>
									:
									<View><Text>Empty</Text></View>}

							</View>
						</ScrollView>
						: null}
				</View>
			)
		}
	}
}

mapStateToProps = (state, props) => {
	return {
		persondata: state.personReducer.persondata,
		personImage: state.personReducer.personImagedata,
	}
}
mapDispatchToProps = (dispatch) => {
	return bindActionCreators(myActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PersonInfo);