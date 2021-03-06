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
import * as myActions from '../../../Actions/person'
import Icon from 'react-native-vector-icons/FontAwesome'
const { width, height } = Dimensions.get('window')
class Movies extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			personMovies: []
		}
	}
	componentWillMount = () => {
		this.props.getPersonMovies(this.props.personId);
	}
	componentWillReceiveProps(nextProps) {
		this.setState({ personMovies: nextProps.personMovies})
	}
	render() {
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
				<View>
					<Text>Movies</Text>
				</View>
			)
		}
	}
}

mapStateToProps = (state, props) => {
	return {
		personMovies: state.personReducer.personMoviesdata,
	}
}
mapDispatchToProps = (dispatch) => {
	return bindActionCreators(myActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Movies);