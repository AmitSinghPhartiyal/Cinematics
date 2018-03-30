import React, { Component } from "react";
import Popular from "./tabs/Popular";
import Upcoming from "./tabs/Upcoming";
import NowPlaying from "./tabs/NowPlaying";
import TopBoxOffice from "./tabs/TopBoxOffice";
import ScrollableTabView, {
	ScrollableTabBar
} from "react-native-scrollable-tab-view";
export default class ScrollableTabs extends Component {
	render() {
		return (
			<ScrollableTabView
				renderTabBar={() => <ScrollableTabBar />}
				tabBarActiveTextColor="#fff"
				tabBarInactiveTextColor="#bdc3c7"
				tabBarUnderlineStyle={{ backgroundColor: "#76d46e" }}
			>
				<NowPlaying tabLabel="NOW PLAYING" />
				<TopBoxOffice tabLabel="TOP BOX OFFICE" />
				<Upcoming tabLabel="UPCOMING" />
				<Popular tabLabel="POPULAR" />
			</ScrollableTabView>
		);
	}
}
