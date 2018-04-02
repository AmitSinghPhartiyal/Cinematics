import React, { Component } from "react";
import { Dropdown } from "react-native-material-dropdown";
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
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as myActions from "../../Actions/discover";
const { width, height } = Dimensions.get("window");
import { IMDBICON,METHOD,COLORS } from "../constant/";
class SidebarFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: 2018,
      to: 2018,
      genres: [],
      selectedGenre: ""
    };
  }
  componentDidMount = () => {
    this.props.getGenre();
  };
  componentWillReceiveProps = nextProps => {
    if (this.props.genres != nextProps.genres) {
      this.setState({ genres: nextProps.genres });
    }
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          paddingTop: Platform.OS == "ios" ? 20 : 0
        }}
      >
        <View
          style={{
            flex: 0.08,
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "#333435"
          }}
        >
          <View style={{ margin: 10, flex: 0.7 }}>
            <Text style={{ textAlign: "left", fontSize: 20, color: COLORS.WHITE }}>
              Filter
            </Text>
          </View>
          <TouchableOpacity
            style={{ margin: 10, flex: 0.3 }}
            onPress={() => {
              this.props.applyFilter(
                this.state.selectedGenre,
                this.state.from,
                this.state.to
              );
            }}
          >
            <Text style={{ textAlign: "right", fontSize: 16, color: COLORS.WHITE }}>
              Apply
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 0.92,
            flexDirection: "column",
            backgroundColor: COLORS.WHITE
          }}
        >
          <View style={{ backgroundColor: "#BDC3C7", padding: 10 }}>
            <Text>Year Range</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.5 }}>
              <Dropdown
                value={this.state.from}
                data={METHOD.getYears()}
                onChangeText={selected => {
                  this.setState({ from: selected });
                }}
              />
            </View>
            <View style={{ flex: 0.5 }}>
              <Dropdown
                value={this.state.to}
                data={METHOD.getYears()}
                onChangeText={selected => {
                  if (this.state.from < this.state.to)
                    this.setState({ to: selected });
                  else this.setState({ to: this.state.from });
                }}
              />
            </View>
          </View>
          <View style={{ backgroundColor: "#BDC3C7", padding: 10 }}>
            <Text>Genres</Text>
          </View>
          <Dropdown
            label="ALL"
            data={this.props.genres}
            onChangeText={selected =>
              this.props.genres.forEach(item => {
                if (item.value == selected)
                  this.setState({ selectedGenre: item.id });
              })
            }
          />
        </View>
      </View>
    );
  }
}
mapStateToProps = (state, props) => {
  return {
    genres: state.filterReducer.genres
  };
};
mapDispatchToProps = dispatch => {
  return bindActionCreators(myActions, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(SidebarFilter);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE
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
