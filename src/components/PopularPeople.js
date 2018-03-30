import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import Header from "./Header";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as myActions from "../Actions/Actions";
import Image from "react-native-image-progress";
import { Actions } from "react-native-router-flux";
import CommonComponent from "./tabs/CommonComponent";
import Icon from "react-native-vector-icons/FontAwesome";
import { IMAGE_PATH } from "./constant/const"
const { width, height } = Dimensions.get("window");
class PopularPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peoplelist: [],
      loading: true
    };
  }
  componentDidMount() {
    this.props.fetchData(
      "https://api.themoviedb.org/3/person/popular?api_key=55032e2af54d05c1326b26b0bf830b60&language=en-US&page=2"
    );
  }
  changeView = () => {
    this.setState({ peoplelist: nextProps.peoplelist });
  };
  render() {
    if (this.props.loading) {
      return (
        <ActivityIndicator
          animating={true}
          style={{ flex: 1, height: 120, marginTop: height * 0.35 }}
          size="large"
          color="#76d46e"
        />
      );
    } else {
      return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <View
            style={{ flex: 0.1, flexDirection: "row", backgroundColor: "#333" }}
          >
            <View
              style={{
                flex: 0.2,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  Actions.drawerOpen();
                }}
              >
                <Icon name="bars" style={{ color: "#fff", fontSize: 20 }} />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 0.6, justifyContent: "center" }}>
              <Text style={{ color: "#fff", fontSize: 20 }}>
                Popular People
              </Text>
            </View>
            <View
              style={{
                flex: 0.2,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <TouchableOpacity onPress={() => Actions.Search()}>
                <Icon name="search" style={{ color: "#fff", fontSize: 20 }} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 0.9, backgroundColor: "#fff" }}>
            <FlatList
              refresh={true}
              data={this.props.peoplelist}
              numColumns={1}
              ItemSeparatorComponent={this.FlatListItemSeparator}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item, index }) => {
                if (item.profile_path) {
                  return (
                    <TouchableOpacity
                      style={{
                        flex: 1,
                        padding: 20,
                        flexDirection: "row",
                        borderBottomWidth: 0.5,
                        borderBottomColor: "#B5BEC6"
                      }}
                      onPress={() => {
                        Actions.PeopleDescription({ peopleProp: item });
                      }}
                    >
                      <View style={{ flex: 3, flexDirection: "column" }}>
                        <Image
                          source={{ uri: IMAGE_PATH + item.profile_path }}
                          style={{ borderRadius: 100, width: 100, height: 100 }}
                          indicator={ActivityIndicator}
                          borderRadius={100}
                        />
                      </View>
                      <View
                        style={{
                          flex: 5,
                          flexDirection: "column",
                          justifyContent: "center"
                        }}
                      >
                        <Text
                          style={{
                            color: "#000",
                            fontSize: 15,
                            fontWeight: "bold"
                          }}
                        >
                          {" "}
                          {item.name}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                } else {
                  return (
                    <TouchableOpacity
                      style={{
                        flex: 1,
                        padding: 20,
                        flexDirection: "row",
                        borderBottomWidth: 0.5,
                        borderBottomColor: "#B5BEC6"
                      }}
                    >
                      <View
                        style={{
                          flex: 3,
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <Icon name="image" style={{ fontSize: 80 }} />
                      </View>
                      <View
                        style={{
                          flex: 4,
                          flexDirection: "column",
                          justifyContent: "center"
                        }}
                      >
                        <Text
                          style={{
                            color: "#000",
                            fontSize: 15,
                            fontWeight: "bold"
                          }}
                        >
                          {" "}
                          {item.name}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                }
              }}
            />
          </View>
        </View>
      );
    }
  }
}
mapStateToProps = (state, props) => {
  return {
    peoplelist: state.movieReducer.peopledata,
    loading: state.movieReducer.loading,
    isGrid: state.movieReducer.isGrid
  };
};
mapDispatchToProps = dispatch => {
  return bindActionCreators(myActions, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(PopularPeople);
