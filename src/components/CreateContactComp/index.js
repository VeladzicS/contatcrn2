import { View, Text, Image } from "react-native";
import React from "react";
import Container from "../common/Container";
import CustomButton from "../common/CustomButton";
import Input from "../common/Input";
import CountryPicker from "react-native-country-picker-modal";

import styles from "./styles";
import { DEFAULT_IMAGE_URI } from "../../constants/actionTypes/general";

const CreateContactComponent = ({ onChangeText, form, setForm, onSubmit }) => {
  return (
    <View style={styles.container}>
      <Container>
        <Image
          width={150}
          height={150}
          style={styles.imageView}
          source={{ uri: DEFAULT_IMAGE_URI }}
        />
        <Text style={styles.chooseText}>Chose Image</Text>
        <Input
          label="First Name"
          placeholder="Enter First Name"
          onChangeText={(value) => {
            onChangeText({ name: "firstName", value: value });
          }}
        />
        <Input
          label="Last Name"
          placeholder="Enter Last Name"
          onChangeText={(value) => {
            onChangeText({ name: "lastName", value: value });
          }}
        />
        <Input
          icon={
            <CountryPicker
              withFilter
              withFlag
              countryCode={form.countryCode || undefined}
              withCountryNameButton={false}
              withCallingCode
              withCallingCodeButton
              withEmoji
              onSelect={(v) => {
                const phoneCode = v.callingCode[0];
                const cCode = v.cca2;
                setForm({ ...form, phoneCode, countryCode: cCode });
              }}
            />
          }
          style={{ paddingLeft: 10 }}
          iconPosition="left"
          onChangeText={(value) => {
            onChangeText({ name: "phoneNumber", value: value });
          }}
          label="Phone Number"
          placeholder="Enter Phone Number"
        />
        <CustomButton primary title="Submit" onPress={onSubmit} />
      </Container>
    </View>
  );
};

export default CreateContactComponent;
