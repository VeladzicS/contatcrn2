import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import styles from "./styles";
import Icon from "../Icon";
import colors from "../../../assets/theme/colors";
import ImagePickerCropper from "react-native-image-crop-picker";
const ImagePicker = React.forwardRef(({ onFileSelected }, ref) => {
  const options = [
    {
      name: "Take from camera",
      icon: <Icon name="camera" colors={colors.grey} size={21} />,
      onPress: () => {
        ImagePickerCropper.openCamera({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then((images) => {
            onFileSelected(images);
          })
          .catch((error) => {
            console.log("error", error);
          });
      },
    },
    {
      name: "Choose from Gallery",
      icon: <Icon name="image" colors={colors.grey} size={21} />,
      onPress: () => {
        ImagePickerCropper.openPicker({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then((images) => {
            onFileSelected(images);
          })
          .catch((error) => {
            console.log("error", error);
          });
      },
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
          <TouchableOpacity
            key={name}
            onPress={onPress}
            style={styles.pickerOption}
          >
            {icon}
            <Text style={styles.text}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </RBSheet>
  );
});

export default ImagePicker;
