import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "../../components/common/Icon";
import ContactList from "../../components/ContactList";
import getContacts from "../../context/actions/contacts/getContacts";
import { GlobalContext } from "../../context/Provider";
import { AsyncStorage } from "react-native";
const Contacts = () => {
  const { setOptions, toggleDrawer } = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState();

  const {
    contactsDispatch,
    contactsState: {
      getContacts: { data, loading },
    },
  } = useContext(GlobalContext);

  const getSettings = async () => {
    const sortPref = await AsyncStorage.getItem("sortBy");
    if (sortPref) {
      setSortBy(sortPref);
    }
  };

  useEffect(() => {
    getContacts()(contactsDispatch);
  }, []);

  useFocusEffect(
    useCallback(() => {
      getSettings();
      return () => {};
    }, [])
  );

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}
        >
          <Icon type="material" style={{ padding: 10 }} size={25} name="menu" />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <ContactList
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      data={data}
      loading={loading}
      sortBy={sortBy}
    />
  );
};

export default Contacts;
