import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import AppModal from "../common/AppModal";
import colors from "../../assets/theme/colors";
import Icon from "../common/Icon";

const SettingsComponent = ({
  modalVisible,
  setModalVisible,
  settingsOptions,
  preffArr,
}) => {
  return (
    <>
      <AppModal
        modalVisible={modalVisible}
        modalFooter={<></>}
        closeOnTouchOutside={false}
        modalBody={
          <View>
            {preffArr.map(({ name, selected, onPress }) => (
              <View>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 5,
                  }}
                  onPress={onPress}
                >
                  {selected && <Icon name="check" type="material" size={20} />}
                  <Text
                    style={{ fontSize: 17, paddingLeft: selected ? 15 : 35 }}
                  >
                    {name}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        }
        title="Sort by"
        setModalVisible={setModalVisible}
      />

      <ScrollView style={{ backgroundColor: colors.white }}>
        {settingsOptions.map(({ title, subTitle, onPress }, index) => (
          <TouchableOpacity key={title} onPress={onPress}>
            <View
              style={{
                paddingHorizontal: 20,
                paddingBottom: 20,
                paddingTop: 20,
              }}
            >
              <Text style={{ fontSize: 17 }}>{title}</Text>
              {subTitle && (
                <Text style={{ fontSize: 14, opacity: 0.6, paddingTop: 5 }}>
                  {subTitle}
                </Text>
              )}
            </View>
            <View style={{ height: 0.5, backgroundColor: colors.grey }} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default SettingsComponent;
