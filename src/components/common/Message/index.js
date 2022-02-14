import React, { useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../../assets/theme/colors";
import styles from "./styles";

const CustomMessage = ({
  message,
  retry,
  retryFn,
  info,
  primary,
  danger,
  infor,
  onDismiss,
  success,
  ...props
}) => {
  const [userDiss, setDiss] = useState(false);

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
    if (primary) {
      return colors.primary;
    }

    if (success) {
      return colors.success;
    }

    if (infor) {
      return colors.secondary;
    }

    if (danger) {
      return colors.danger;
    }
  };
  return (
    <>
      {userDiss ? null : (
        <TouchableOpacity
          style={[styles.wrapper, { backgroundColor: getBcgColor() }]}
        >
          <View
            style={[{ flexDirection: "row", justifyContent: "space-between" }]}
          >
            <Text
              style={{
                color: colors.white,
              }}
            >
              {message}
            </Text>
            {retry && !typeof onDismiss === "function" && (
              <TouchableOpacity onPress={retryFn}>
                <Text
                  style={{
                    color: colors.white,
                  }}
                >
                  Retry
                </Text>
              </TouchableOpacity>
            )}

            {typeof onDismiss === "function" && (
              <TouchableOpacity
                onPress={() => {
                  setDiss(true);
                  onDismiss();
                }}
              >
                <Text
                  style={{
                    color: colors.white,
                  }}
                >
                  X
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default CustomMessage;
