import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  WebView,
  Linking,
  FlatList,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import pop from "../../images/pop.jpeg";
import icon from "../../images/tmdb.png";
import imdb from "../../images/imdb.png";
import apple from "../../images/apple.jpeg";
import YOUTUBE_PATH from "../constant/const"
import Icon from "react-native-vector-icons/FontAwesome";
const { width, height } = Dimensions.get("window");
export default class Info extends Component {
  constructor(props) {
    super(props);
  }
  playVideo(e) {
    let uri = YOUTUBE_PATH + e.key;
    Linking.openURL(uri);
  }
  render() {
    console.log("This Porps", this.props);
    return (
      <ScrollView>
        <View style={{ flex: 1, padding: 10, backgroundColor: "#fff" }}>
          <View style={{ flex: 0.3, flexDirection: "row", padding: 10 }}>
            <TouchableOpacity
              style={{
                flex: 0.16,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 5
              }}
            >
              <View>
                <Icon name="star" style={{ fontSize: 50, color: "#C0FCD3" }} />
              </View>
              <View>
                <Text>Rate</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                flex: 0.16,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <View>
                <Image source={icon} style={{ width: 50, height: 50 }} />
              </View>
              <View>
                <Text>{this.props.info.vote_average}</Text>
              </View>
            </View>
            <View
              style={{
                flex: 0.16,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <View>
                <Image source={imdb} style={{ width: 50, height: 50 }} />
              </View>
              <View>
                <Text>7.8</Text>
              </View>
            </View>
            <View
              style={{
                flex: 0.16,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <View>
                <Image source={apple} style={{ width: 50, height: 50 }} />
              </View>
              <View>
                <Text>97%</Text>
              </View>
            </View>
            <View
              style={{
                flex: 0.16,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image source={pop} style={{ width: 50, height: 50 }} />
              <View>
                <Text>79%</Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#ACF39D",
                flex: 0.16,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text>88</Text>
            </View>
          </View>
          <View style={{ flex: 0.4 }}>
            <Text
              numberOfLines={4}
              style={{
                padding: 10,
                color: "#000",
                fontFamily: "Arial",
                fontSize: 12,
                letterSpacing: 5
              }}
            >
              {this.props.info.overview}
            </Text>
          </View>
          <View style={{ flex: 0.2, flexDirection: "column", paddingTop: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text
                  style={{ color: "#000", marginLeft: 10, fontWeight: "bold" }}
                >
                  Release Date:{" "}
                </Text>
              </View>
              <View>
                <Text>
                  {this.props.info.release_date
                    ? this.props.info.release_date
                    : this.props.info.first_air_date
                      ? this.props.info.first_air_date
                      : "N/A"}
                </Text>
              </View>
            </View>
            <View style={{ flex: 0.3, flexDirection: "row" }}>
              <View>
                <Text
                  style={{ color: "#000", marginLeft: 10, fontWeight: "bold" }}
                >
                  Budget:{" "}
                </Text>
              </View>
              <View>
                <Text>
                  {this.props.detail && this.props.detail.budget
                    ? this.props.detail.budget
                    : "N/A"}
                </Text>
              </View>
            </View>
            <View style={{ flex: 0.3, flexDirection: "row" }}>
              <View>
                <Text
                  style={{ color: "#000", marginLeft: 10, fontWeight: "bold" }}
                >
                  Revenue:{" "}
                </Text>
              </View>
              <View>
                <Text>
                  {this.props.detail && this.props.detail.revenue
                    ? this.props.detail.revenue
                    : "N/A"}
                </Text>
              </View>
            </View>
            <View style={{ flex: 0.3, flexDirection: "row" }}>
              <View>
                <Text
                  style={{ color: "#000", marginLeft: 10, fontWeight: "bold" }}
                >
                  Directed By:{" "}
                </Text>
              </View>
              <View>
                <Text>N/A</Text>
              </View>
            </View>
            <View style={{ flex: 0.3, flexDirection: "row" }}>
              <View>
                <Text
                  style={{ color: "#000", marginLeft: 10, fontWeight: "bold" }}
                >
                  DVD Release Date:{" "}
                </Text>
              </View>
              <View>
                <Text>N/A</Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 0.4 }}>
            {this.props.trailor ? (
              <FlatList
                data={this.props.trailor.results}
                numColumns={1}
                ItemSeparatorComponent={this.FlatListItemSeparator}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => {
                  console.log("iTME", item);
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        this.playVideo(item);
                      }}
                    >
                      <Text>{item.name}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            ) : (
              <ActivityIndicator
                animating={true}
                style={{ height: 120, marginTop: height * 0.3 }}
                size="large"
                color="#76d46e"
              />
            )}
          </View>
        </View>
      </ScrollView>
    );
  }
}
