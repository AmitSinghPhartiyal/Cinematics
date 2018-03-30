import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  StyleSheet,
  View,
  ScrollView,
  BackgroundImage,
  TextInput,
  Text,
  Image,
  Platform,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator
} from "react-native";
import { Actions } from "react-native-router-flux";
const {width, height} = Dimensions.get('window')
import { IMDBICON } from "./constant/const";
export default class SidebarFilter extends Component {
  render() {
    return (
      <View style={styles.sidemenumaindiv}>
        <ScrollView>
          <View style={styles.drawer}>
            <View style={styles.drawerHeader}>
              <View style={styles.tmdbImgView}>
                <Image source={IMDBICON} style={styles.tmdbImage} />
              </View>
              <View style={styles.tmdbTitleView}>
                <Text style={{ color: "#fff" }}>Connect to TMDb</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.sidemenuitems}
            onPress={() => {
              Actions.Home();
            }}
          >
            <View style={styles.iconView}>
              <Icon name="film" size={20} color="#BDC3C7" />
            </View>
            <View style={styles.textView}>
              <Text style={styles.sidemenuText}>Movies</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sidemenuitems}
            onPress={() => {
              Actions.Tvshows();
            }}
          >
            <View style={styles.iconView}>
              <Icon name="tv" size={20} color="#BDC3C7" />
            </View>
            <View style={styles.textView}>
              <Text style={styles.sidemenuText}>Tv Shows</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sidemenuitems}
            onPress={() => {
              Actions.Discover();
            }}
          >
            <View style={styles.iconView}>
              <Icon name="search" size={20} color="#BDC3C7" />
            </View>
            <View style={styles.textView}>
              <Text style={styles.sidemenuText}>Discover</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sidemenuitems}
            onPress={() => {
              Actions.PopularPeople();
            }}
          >
            <View style={styles.iconView}>
              <Icon name="user" size={20} color="#BDC3C7" />
            </View>
            <View style={styles.textView}>
              <Text style={styles.sidemenuText}>Popular People</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  drawer: {
    flexDirection: "row",
    height: height * 0.2,
    alignItems: "center",
    backgroundColor: "#333435"
  },
  drawerHeader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  sidemenuitems: {
    flex: 1,
    height: 50,
    paddingBottom: 0,
    flexDirection: "row",
    alignItems: "center"
  },
  sidemenuText: {
    fontSize: 16,
    textAlign: "left",
    color: "#666",
    fontWeight: "normal"
  },
  iconView: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"
  },
  textView: {
    flex: 0.8
  },
  tmdbImage: {
    height: 50,
    width: 50
  },
  tmdbImgView: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"
  },
  tmdbTitleView: {
    flex: 0.8
  }
});
