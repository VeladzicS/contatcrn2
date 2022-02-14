import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../../assets/theme/colors";
import styles from "./styles";

const CustomButton = ({
  title,
  disabled,
  secondary,
  primary,
  danger,
  loading,
  onPress,
  ...props
}) => {
  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === "left") {
        return "row";
      } else if (iconPosition === "right") {
        return "row-reverse";
      }
    } else {
      return "row";
    }
  };

  const getBcgColor = () => {
    if (disabled) {
      return colors.grey;
    }
    if (primary) {
      return colors.primary;
    }

    if (secondary) {
      return colors.secondary;
    }

    if (danger) {
      return colors.danger;
    }
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.wrapper, { backgroundColor: getBcgColor() }]}
    >
      <View style={[styles.loaderSection]}>
        {loading && (
          <ActivityIndicator
            color={primary ? colors.secondary : colors.primary}
          />
        )}
        {title && (
          <Text
            style={{
              color: disabled ? "black" : colors.white,
              paddingLeft: loading ? 5 : 0,
            }}
          >
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
