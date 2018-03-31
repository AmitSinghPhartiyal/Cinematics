import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Header from "../common/Header";
import Modal from "react-native-modal";
import { connect } from "react-redux";
import { COLORS } from '../constant/index'
import { bindActionCreators } from "redux";
import * as myActions from "../../Actions/Actions";
import { Actions } from "react-native-router-flux";
import { Radio, List, ListItem, Right } from "native-base";
import CommonComponent from "../common/CommonComponent";
import Icon from "react-native-vector-icons/FontAwesome";
class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],  
      loading: true,
      isGrid: true,
      changeSidebar: false,
      sidebarPosition: false,
      selectedItem:'popularity.desc',
      isVisible: false
    };
  }
  componentDidMount() {
    this.props.fetchData(
      "https://api.themoviedb.org/3/discover/movie?api_key=55032e2af54d05c1326b26b0bf830b60"
    );
  }
    discover(){
      console.log("Discver state",this.state);
      this.props.fetchData("https://api.themoviedb.org/3/discover/movie?api_key=55032e2af54d05c1326b26b0bf830b60&sort_by=" + this.state.selectedItem);
    }

  
  drawerFunction = async () => {
    await this.setState({ changeSidebar: true, sidebarPosition: true });
    this.props.changeDrawer(this.state.changeSidebar);
    this.props.drawerFunctionBar(this.state.sidebarPosition);
    Actions.drawerOpen();
  };
  drawerFunctionBar = async () => {
    await this.setState({ changeSidebar: false, sidebarPosition: false });
    this.props.changeDrawer(this.state.changeSidebar);
    this.props.drawerFunctionBar(this.state.sidebarPosition);
    Actions.drawerOpen();
  };
  changeView = () => {
    this.setState({ isGrid: !this.state.isGrid });
    this.props.moviesView(this.state.isGrid);
  };
  componentWillReceiveProps(nextProps) {
    this.setState({ changeSidebar: nextProps.changeSidebar });
    console.log("Next prop",nextProps);
    // if (this.props.discover != nextProps.discover) {
    //   this.setState({
    //     discover: nextProps.discover,
    //     isLoading: nextProps.isLoading
    //   });
    // }
  }
  render() {
    console.log("Discovery data", this.state);
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View
            style={{
              flex: 0.025,
              flexDirection: "row",
              backgroundColor: COLORS.PRIMARY,
              padding: 20
            }}
          >
            <View style={{ flex: 0.2, alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => {
                  this.drawerFunctionBar();
                }}
              >
                <Icon name="bars" style={{ color: "#fff", fontSize: 20 }} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 0.5,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={{ color: "#fff", fontSize: 20 }}>Discover</Text>
            </View>
            <View
              style={{
                flex: 0.1,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.drawerFunction();
                }}
              >
                <Icon name="filter" style={{ color: "#fff", fontSize: 20 }} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 0.1,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.setState({ isVisible: true });
                }}
              >
                <Icon name="sort" style={{ color: "#fff", fontSize: 20 }} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 0.1,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.changeView();
                }}
              >
                <Icon
                  name={this.state.isGrid ? "list-ul" : "th"}
                  style={{ color: "#fff", fontSize: 20 }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 0.975 }}>
            <CommonComponent
              list={this.props.list}
              isGrid={this.props.isGrid}
            />
          </View>
        </View>
        <Modal
            isVisible={this.state.isVisible}
            onBackdropPress={() => this.setState({ isVisible: false })}
          >
            <View style={{ backgroundColor: "#fff", flex: 0.6 }}>
              <Text
                style={{
                  color: "#000",
                  fontSize: 16,
                  fontWeight: "bold",
                  padding: 15
                }}
              >
                Apply Sorting By
              </Text>
              <List>
                <ListItem
                  onPress={ async () => {
                    await this.setState({
                      selectedItem: "original_title.desc",
                      isVisible: false,
                      loading: true
                    });
                    this.discover();
                  }}
                >
                  <Radio
                    selected={this.state.selectedItem == "original_title.desc"}
                  />
                  <Text style={{ paddingLeft: 10,color: "#000"}}>Title</Text>
                </ListItem>
                <ListItem
                  onPress={() => {
                    this.setState({
                      selectedItem: "popularity.desc",
                      isVisible: false,
                      loading: true
                    });
                    this.discover();
                  }}
                >
                  <Radio
                    selected={this.state.selectedItem == "popularity.desc"}
                  />
                  <Text style={{paddingLeft: 10,color: "#000"}}>Popularity</Text>
                </ListItem>
                <ListItem
                  onPress={() => {
                    this.setState({
                      selectedItem: "vote_average.desc",
                      isVisible: false,
                      loading: true
                    });
                    this.discover();
                  }}
                >
                  <Radio
                    selected={this.state.selectedItem == "vote_average.desc"}
                  />
                  <Text style={{paddingLeft: 10,color: "#000"}}>Rating</Text>
                </ListItem>
                <ListItem
                  onPress={() => {
                    this.setState({
                      selectedItem: "release_date.desc",
                      isVisible: false,
                      loading: true
                    });
                    this.discover();
                  }}
                >
                  <Radio
                    selected={this.state.selectedItem == "release_date.desc"}
                  />
                  <Text style={{paddingLeft: 10,color: "#000"}}>Release Date</Text>
                </ListItem>
                <ListItem
                  onPress={() => {
                    this.setState({
                      selectedItem: "revenue.desc",
                      isVisible: false,
                      loading: true
                    });
                    this.discover();
                  }}
                >
                  <Radio selected={this.state.selectedItem == "revenue.desc"} />
                  <Text style={{paddingLeft: 10,color: "#000"}}>Revenue</Text>
                </ListItem>
              </List>
              <Text
                style={{
                  textAlign: "right",
                  color: "green",
                  fontSize: 12,
                  marginRight: 10
                }}
                onPress={() => this.setState({ isVisible: false })}
              >
                CANCEL
              </Text>
            </View>
          </Modal>
			
      </View>
    );
  }
}
mapStateToProps = (state, props) => {
  console.log("STATE",state);
  return {
    list: state.filterReducer.data,
    loading: state.movieReducer.loading,
    isGrid: state.movieReducer.isGrid,
    changeSidebar: state.drawerReducer.changeSidebar,
    sidebarPosition: state.drawerReducer.sidebarPosition,
    discover: state.movieReducer.filterdata,
    
  };
};
mapDispatchToProps = dispatch => {
  return bindActionCreators(myActions, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Discover);
