import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Header from "./Header";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Modal from "react-native-modal";
import * as myActions from "../Actions/Actions";
import { Actions } from "react-native-router-flux";
import CommonComponent from "./tabs/CommonComponent";
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
			arrange: 'popularity.desc'
    };
  }
  componentDidMount() {
    this.props.fetchData(
      "https://api.themoviedb.org/3/discover/movie?api_key=55032e2af54d05c1326b26b0bf830b60"
    );
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
    //	this.setState({ changeSidebar: nextProps.changeSidebar })
  }
  render() {
    console.log("Discovery data", this.props);
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View
            style={{
              flex: 0.025,
              flexDirection: "row",
              backgroundColor: "#333",
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
              <TouchableOpacity>
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
                  onPress={() => {
                    this.setState({
                      arrange: "original_title.desc",
                      isVisible: false,
                      loading: true
                    });
                    this.props.Discovernow(
                      this.props.starting,
                      this.props.ending,
                      this.props.geniss,
                      this.state.arrange
                    );
                  }}
                >
                  <Radio
                    selected={this.state.arrange == "original_title.desc"}
                  />
                  <Text style={{ paddingLeft: 10, color: "#000" }}>Title</Text>
                </ListItem>
                <ListItem
                  onPress={() => {
                    this.setState({
                      arrange: "popularity.desc",
                      isVisible: false,
                      loading: true
                    });
                    this.props.Discovernow(
                      this.props.starting,
                      this.props.ending,
                      this.props.geniss,
                      this.state.arrange
                    );
                  }}
                >
                  <Radio selected={this.state.arrange == "popularity.desc"} />
                  <Text style={{ paddingLeft: 10, color: "#000" }}>
                    Popularity
                  </Text>
                </ListItem>
                <ListItem
                  onPress={() => {
                    this.setState({
                      arrange: "vote_average.desc",
                      isVisible: false,
                      loading: true
                    });
                    this.props.Discovernow(
                      this.props.starting,
                      this.props.ending,
                      this.props.geniss,
                      this.state.arrange
                    );
                  }}
                >
                  <Radio selected={this.state.arrange == "vote_average.desc"} />
                  <Text style={{ paddingLeft: 10, color: "#000" }}>Rating</Text>
                </ListItem>
                <ListItem
                  onPress={() => {
                    this.setState({
                      arrange: "release_date.desc",
                      isVisible: false,
                      loading: true
                    });
                    this.props.Discovernow(
                      this.props.starting,
                      this.props.ending,
                      this.props.geniss,
                      this.state.arrange
                    );
                  }}
                >
                  <Radio selected={this.state.arrange == "release_date.desc"} />
                  <Text style={{ paddingLeft: 10, color: "#000" }}>
                    Release Date
                  </Text>
                </ListItem>
                <ListItem
                  onPress={() => {
                    this.setState({
                      arrange: "revenue.desc",
                      isVisible: false,
                      loading: true
                    });
                    this.props.Discovernow(
                      this.props.starting,
                      this.props.ending,
                      this.props.geniss,
                      this.state.arrange
                    );
                  }}
                >
                  <Radio selected={this.state.arrange == "revenue.desc"} />
                  <Text style={{ paddingLeft: 10, color: "#000" }}>
                    Revenue
                  </Text>
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
      </View>
    );
  }
}
mapStateToProps = (state, props) => {
  return {
    list: state.movieReducer.nowdata,
    loading: state.movieReducer.loading,
    isGrid: state.movieReducer.isGrid,
    changeSidebar: state.drawerReducer.changeSidebar,
    sidebarPosition: state.drawerReducer.sidebarPosition
  };
};
mapDispatchToProps = dispatch => {
  return bindActionCreators(myActions, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Discover);
