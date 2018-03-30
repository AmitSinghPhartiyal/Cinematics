import React, { Component } from "react";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu";
import Icon from "react-native-vector-icons/FontAwesome";
export default class PopUpComponent extends Component {
  render() {
    return (
      <Menu
        style={{
          flex: 0.1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <MenuTrigger>
          <Icon
            name="ellipsis-v"
            style={{ flex: 0.1, color: "#fff", fontSize: 25 }}
          />
        </MenuTrigger>
        <MenuOptions style={{ padding: 10 }}>
          <MenuOption onSelect={() => alert("Save")} text="Google Play Store" />
          <MenuOption onSelect={() => alert("Tmdb")} text="View on Tmdb" />
          <MenuOption onSelect={() => alert("IMDb")} text="View on IMDb" />
          <MenuOption
            onSelect={() => alert("Join")}
            text="Join the discussion"
          />
        </MenuOptions>
      </Menu>
    );
  }
}
