import React, { Component } from "react";
import Header from "../common/Header";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import NowPlaying from "../tabs/movietabs/NowPlaying";
import Popular from "../tabs/movietabs/Popular";
import TopBoxOffice from "../tabs/movietabs/TopBoxOffice";
import Upcoming from "../tabs/movietabs/Upcoming";
import { COLORS } from "../constant/";
import ScrollableTabView, {
  ScrollableTabBar
} from "react-native-scrollable-tab-view";
export default class Movies extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View style={{ flex: 0.1, backgroundColor: COLORS.PRIMARY }}>
          <Header />
        </View>
        <View style={{ flex: 0.9, backgroundColor: COLORS.PRIMARY }}>
          <ScrollableTabView
            renderTabBar={() => <ScrollableTabBar />}
            tabBarActiveTextColor={COLORS.WHITE}
            tabBarInactiveTextColor="#bdc3c7"
            tabBarUnderlineStyle={{
              backgroundColor: COLORS.ACTIVE_TAB_UNDERLINE
            }}
          >
            <NowPlaying tabLabel="NOW PLAYING" />
            <TopBoxOffice tabLabel="TOP BOX OFFICE" />
            <Upcoming tabLabel="UPCOMING" />
            <Popular tabLabel="POPULAR" />
          </ScrollableTabView>
        </View>
      </View>
    );
  }
}
