import React from "react";
import { useEffect, useState } from "react";
import { View, Text, AsyncStorage } from "react-native";
import SettingsComponent from "../../components/SettingsComponent";

const Settings = () => {
  const [email, setEmail] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState(null);

  const saveSetting = (key, value) => AsyncStorage.setItem(key, value);
  const settingsOptions = [
    { title: "My Info", subTitle: "Setup your profile", onPress: () => {} },
    { title: "Accounts", subTitle: null, onPress: () => {} },
    {
      title: "Default account for new contacts",
      subTitle: email,
      onPress: () => {},
    },
    {
      title: "Contacts to display",
      subTitle: "All contacts",
      onPress: () => {},
    },
    {
      title: "Sort by",
      subTitle: sortBy || "First Name or Last Name",
      onPress: () => {
        setModalVisible(true);
      },
    },
    { title: "Name format", subTitle: "First name first", onPress: () => {} },
    { title: "Import", subTitle: null, onPress: () => {} },
    { title: "Export", subTitle: null, onPress: () => {} },
    { title: "Blocked numbers", subTitle: null, onPress: () => {} },
    { title: "About RNContacts", subTitle: null, onPress: () => {} },
  ];

  const preffArr = [
    {
      name: "First Name",
      selected: sortBy === "First Name",
      onPress: () => {
        saveSetting("sortBy", "First Name ");
        setSortBy("First Name");
        setModalVisible(false);
      },
    },
    {
      name: "Last Name",
      selected: sortBy === "Last Name",
      onPress: () => {
        saveSetting("sortBy", "Last Name ");
        setSortBy("Last Name");
        setModalVisible(false);
      },
    },
  ];

  const getSettings = async () => {
    const user = await AsyncStorage.getItem("user");
    setEmail(JSON.parse(user).email);

    const sortPref = await AsyncStorage.getItem("sortBy");
    if (sortPref) {
      setSortBy(sortPref);
    }
  };
  useEffect(() => {
    getSettings();
  }, []);

  return (
    <SettingsComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      settingsOptions={settingsOptions}
      preffArr={preffArr}
    />
  );
};

export default Settings;
