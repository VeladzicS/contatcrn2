import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import colors from "../../assets/theme/colors";
import AppModal from "../common/AppModal";
import Icon from "../common/Icon";
import CustomMessage from "../common/Message";
import styles from "./styles";

const ContactList = ({ modalVisible, data, loading, setModalVisible }) => {
  const ListEmptyComponent = () => {
    return (
      <View
        style={{
          paddingVertical: 100,
          paddingHorizontal: 100,
        }}
      >
        <CustomMessage info message="No contacts to show" />
      </View>
    );
  };

  const renderItem = ({ item }) => {
    const { contact_picture, first_name, last_name } = item;

    return (
      <TouchableOpacity>
        <View style={styles.item}>
          {contact_picture ? (
            <Image
              style={{ width: 45, height: 45, borderRadius: 100 }}
              source={{ uri: contact_picture }}
            />
          ) : (
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: colors.grey,
                borderRadius: 100,
              }}
            ></View>
          )}

          <View style={{ flexDirection: "row" }}>
            <Text>{first_name}</Text>
            <Text>{last_name}</Text>
          </View>
          <Text>{phone_number}</Text>
        </View>
        <Icon name="right" type="ant" />
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <AppModal
        modalFooter={<></>}
        modalBody={<View></View>}
        title="My Profile"
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      {loading && (
        <View
          style={{
            paddingVertical: 100,
            paddingHorizontal: 100,
          }}
        >
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}

      {!loading && (
        <View style={{ paddingVertical: 20 }}>
          <FlatList
            renderItem={renderItem}
            data={data}
            keyExtractor={(item) => String(item.id)}
            ListEmptyComponent={ListEmptyComponent}
            ListFooterComponent={<View style={{ height: 100 }} />}
          />
        </View>
      )}
    </View>
  );
};

export default ContactList;
