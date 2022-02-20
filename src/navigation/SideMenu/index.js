import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text, View, TouchableOpacity, Alert } from "react-native";
import Container from "../../components/common/Container";
import styles from "./styles";
import Icon from "../../components/common/Icon";
import { SETTINGS } from "../../constants/routeNames";
import logoutUser from "../../context/actions/auth/logoutUser";

const SideMenu = ({ navigation, authDispatch }) => {
  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert("Logout!", "Are you sure you want to log out ?", [
      {
        text: "Cancel",
        onPress: () => {},
      },

      {
        text: "OK",
        onPress: () => {
          logoutUser()(authDispatch);
        },
      },
    ]);
  };
  const menuItems = [
    {
      icon: <Icon size={20} type="fontisto" name="player-settings" />,
      name: "Settings",
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <Icon size={20} type="material" name="logout" />,
      name: "Logout",
      onPress: handleLogout,
    },
  ];
  return (
    <SafeAreaView>
      <Container>
        <Image
          height={70}
          width={70}
          source={require("../../assets/images/logo.png")}
          style={styles.logoImage}
        />
        <View>
          {menuItems.map(({ name, icon, onPress }) => (
            <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
              {icon}

              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
