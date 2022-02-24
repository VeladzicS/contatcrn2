import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import styles from "./styles";
import Icon from "../Icon";
import colors from "../../../assets/theme/colors";

const ImagePicker = React.forwardRef(({}, ref) => {
  const options = [
    {
      name: "Take from camera",
      icon: <Icon name="camera" colors={colors.grey} size={21} />,
      onPress: () => {},
    },
    {
      name: "Choose from Gallery",
      icon: <Icon name="image" colors={colors.grey} size={21} />,
      onPress: () => {},
    },
  ];
  return (
    <RBSheet
      ref={ref}
      height={300}
      openDuration={250}
      closeOnDragDown
      customStyles={{
        container: {
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
      }}
    >
      <View style={styles.optionsWrapper}>
        {options.map(({ name, onPress, icon }) => (
          <TouchableOpacity key={name} style={styles.pickerOption}>
            {icon}
            <Text style={styles.text}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </RBSheet>
  );
});

export default ImagePicker;
