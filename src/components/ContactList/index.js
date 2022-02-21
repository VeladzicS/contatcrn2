import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import colors from "../../assets/theme/colors";
import { CREATE_CONTACT } from "../../constants/routeNames";
import AppModal from "../common/AppModal";
import Icon from "../common/Icon";
import CustomMessage from "../common/Message";
import styles from "./styles";

const ContactList = ({ modalVisible, data, loading, setModalVisible }) => {
  const { navigate } = useNavigation();
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
    const {
      contact_picture,
      first_name,
      last_name,
      phone_number,
      country_code,
    } = item;

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
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={[styles.name, { color: colors.white }]}>
                {first_name[0]}
              </Text>

              <Text style={[styles.name, { color: colors.white }]}>
                {last_name[0]}
              </Text>
            </View>
          )}
          <View style={{ paddingLeft: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.name}>{first_name}</Text>
              <Text style={styles.name}>{last_name}</Text>
            </View>
            <Text style={styles.phoneNumber}>
              {country_code}
              {phone_number}
            </Text>
          </View>
          <Icon name="right" type="ant" size={20} color={colors.grey} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View style={{ backgroundColor: colors.white }}>
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
              ItemSeparatorComponent={() => (
                <View style={{ height: 0.5, backgroundColor: colors.grey }} />
              )}
              keyExtractor={(item) => String(item.id)}
              ListEmptyComponent={ListEmptyComponent}
              ListFooterComponent={<View style={{ height: 100 }} />}
            />
          </View>
        )}
      </View>

      <TouchableOpacity
        style={styles.floatingActionButton}
        onPress={() => {
          navigate(CREATE_CONTACT);
        }}
      >
        <Icon name="plus" color={colors.white} size={22} />
      </TouchableOpacity>
    </>
  );
};

export default ContactList;
