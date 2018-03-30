import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  ScrollView,
  Clipboard,
  Platform,
  ToastAndroid,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";

import Info from "./descTabs/Info";
import Cast from "./descTabs/Cast";
import { connect } from "react-redux";
import Reviews from "./descTabs/Reviews";
import { bindActionCreators } from "redux";
import * as myActions from "../Actions/Actions";
import Image from "react-native-image-progress";
import { Actions } from "react-native-router-flux";
import PopUpComponent from "./PopUpComponent";
import ShareComponent from "./ShareComponent";
import Icon from "react-native-vector-icons/FontAwesome";
import ScrollableTabView, {
  ScrollableTabBar
} from "react-native-scrollable-tab-view";
const { width, height } = Dimensions.get("window");
import { IMAGE_PATH } from "./constant/const"
class MovieDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: [],
      review: [],
      movie: [],
      trailor: [],
      loading: true,
      visible: false
    };
  }
  onOpen() {
    if (this.state.visible) {
      this.setState({ visible: false });
    } else {
      this.setState({ visible: true });
    }
  }
  componentWillReceiveProps = nextProps => {
    this.setState({ movie: nextProps.movie });
    this.setState({ detail: nextProps.detail });
    this.setState({ trailor: nextProps.trailor });
  };
  componentDidMount = () => {
    this.props.getReview(this.props.movie.id);
    this.props.getMovieDetails(this.props.movie.id);
    this.props.getMoviesTrailors(this.props.movie.id);
  };
  render() {
    console.log("Movie props", this.props);
    if (this.props.loading) {
      return (
        <View style={styles.ActivityIndicatorContainer}>
          <ActivityIndicator
            animating={true}
            style={{ height: 80 }}
            size="large"
            color="black"
          />
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View
            style={{ flex: 0.6, position: "relative", flexDirection: "column" }}
          >
            <View
              style={{
                flex: 0.2,
                flexDirection: "row",
                position: "absolute",
                backgroundColor: "transparent",
                zIndex: 100,
                padding: 10
              }}
            >
              <TouchableOpacity
                style={{ flex: 0.6 }}
                onPress={() => Actions.Home()}
              >
                <Icon
                  name="arrow-left"
                  style={{ color: "#fff", fontSize: 25 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 0.15,
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onPress={() => Actions.Home()}
              >
                <Icon name="home" style={{ color: "#fff", fontSize: 25 }} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 0.15,
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onPress={this.onOpen.bind(this)}
              >
                <Icon
                  name="share-alt"
                  style={{ color: "#fff", fontSize: 25 }}
                />
              </TouchableOpacity>
              <PopUpComponent />
            </View>
            <View style={{ flex: 0.6, backgroundColor: "#FEFCFD" }}>
              <Image
                source={{ uri: IMAGE_PATH + this.props.movie.backdrop_path }}
                style={{ flex: 1, position: "relative" }}
                indicator={ActivityIndicator}
              />
            </View>
            <View
              style={{
                flex: 0.4,
                flexDirection: "row",
                backgroundColor: "#12130F"
              }}
            >
              <View style={{ flex: 0.4 }} />
              <View style={{ flex: 0.6, justifyContent: "center" }}>
                <View style={{ flex: 1, flexDirection: "column", padding: 10 }}>
                  <View style={{ flex: 0.4, flexDirection: "row" }}>
                    <View
                      style={{
                        flex: 0.15,
                        alignItems: "flex-start",
                        justifyContent: "center",
                        marginLeft: 5
                      }}
                    >
                      <Text style={{ color: "#7D7D7D" }}>
                        {!this.props.movie.adult ? "N/A" : 18}
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 0.1,
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <Icon name="circle" style={{ color: "#7D7D7D" }} />
                    </View>
                    <View
                      style={{
                        flex: 0.25,
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <Text style={{ color: "#7D7D7D", padding: 5 }}>
                        {this.props.movie.release_date
                          ? new Date(
                              this.props.movie.release_date
                            ).getFullYear()
                          : new Date(
                              this.props.movie.first_air_date
                            ).getFullYear()}
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 0.1,
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <Icon name="circle" style={{ color: "#7D7D7D" }} />
                    </View>
                    <View
                      style={{
                        flex: 0.45,
                        marginLeft: 5,
                        justifyContent: "center",
                        alignItems: "flex-start"
                      }}
                    >
                      <Text style={{ color: "#7D7D7D" }}>
                        {this.props.detail && this.props.detail.runtime
                          ? Math.floor(this.props.detail.runtime / 60) +
                            " hr " +
                            this.props.detail.runtime % 60 +
                            "min"
                          : "N/A"}
                      </Text>
                    </View>
                  </View>
                  <View style={{ flex: 0.4 }}>
                    <Text
                      numberOfLines={2}
                      style={{
                        fontSize: 20,
                        color: "#fff",
                        fontWeight: "bold",
                        marginLeft: 4
                      }}
                    >
                      {this.props.movie.original_title
                        ? this.props.movie.original_title
                        : this.props.movie.name}
                    </Text>
                  </View>
                  <View style={{ flex: 0.4 }}>
                    <FlatList
                      data={this.props.detail && this.props.detail.genres}
                      numColumns={2}
                      ItemSeparatorComponent={this.comma}
                      keyExtractor={item => item.id.toString()}
                      renderItem={({ item, index }) => {
                        if (this.props.detail.genres) {
                          return (
                            <Text
                              style={{
                                color: "#7D7D7D",
                                alignItems: "flex-start"
                              }}
                            >
                              {" "}
                              {item.name}{" "}
                            </Text>
                          );
                        } else {
                          <Text style={{ color: "#7D7D7D" }}>N/A</Text>;
                        }
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
            <Image
              source={{ uri: IMAGE_PATH + this.props.movie.poster_path }}
              style={{
                width: width * 0.3,
                height: width * 0.5,
                position: "absolute",
                marginTop: height * 0.3,
                marginLeft: width * 0.05
              }}
              indicator={ActivityIndicator}
            />
          </View>
          <View style={{ flex: 0.4 }}>
            <ScrollableTabView
              tabBarBackgroundColor="#1B998B"
              renderTabBar={() => <ScrollableTabBar />}
              tabBarActiveTextColor="#fff"
              tabBarInactiveTextColor="#82C7BF"
              tabBarUnderlineStyle={{ backgroundColor: "#59B4AA" }}
            >
              <Info
                tabLabel="INFO"
                info={this.props.movie}
                detail={this.props.detail}
                trailor={this.props.trailor}
              />
              <Cast tabLabel="CAST" movieId={this.props.movie} />
              <Reviews tabLabel="REVIEWS" />
            </ScrollableTabView>
            <ShareComponent />
          </View>
        </View>
      );
    }
  }
}
mapStateToProps = (state, props) => {
  return {
    review: state.movieReducer.reviewsdata,
    detail: state.movieReducer.detaildata,
    trailor: state.movieReducer.trailordata
  };
};
mapDispatchToProps = dispatch => {
  return bindActionCreators(myActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDescription);
