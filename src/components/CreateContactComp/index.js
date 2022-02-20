import { View, Text } from "react-native";
import React from "react";
import Container from "../common/Container";
import CustomButton from "../common/CustomButton";
import Input from "../common/Input";
import CountryPicker from "react-native-country-picker-modal";
import styles from "./styles";

const CreateContactComponent = () => {
  return (
    <View style={styles.container}>
      <Container>
        <Input label="First Name" placeholder="Enter First Name" />
        <Input label="Last Name" placeholder="Enter Last Name" />
        <Input
          icon={
            <CountryPicker
              withFilter
              withFlag
              withCountryNameButton={false}
              withCallingCode
              withEmoji
              onSelect={() => {}}
            />
          }
          label="Phone Number"
          placeholder="Enter Phone Number"
        />
        <CustomButton primary title="Submit" />
      </Container>
    </View>
  );
};

export default CreateContactComponent;
