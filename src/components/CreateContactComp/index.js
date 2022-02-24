import { View, Text, Image, Switch, TouchableOpacity } from "react-native";
import React from "react";
import Container from "../common/Container";
import CustomButton from "../common/CustomButton";
import Input from "../common/Input";
import CountryPicker from "react-native-country-picker-modal";

import styles from "./styles";
import { DEFAULT_IMAGE_URI } from "../../constants/actionTypes/general";
import colors from "../../assets/theme/colors";
import ImagePicker from "../common/ImagePicker";

const CreateContactComponent = ({
  loading,
  error,
  onChangeText,
  form,
  setForm,
  toggleValueChange,
  onSubmit,
  sheetRef,
  openSheet,
  closeSheet,
}) => {
  return (
    <View style={styles.container}>
      <Container>
        <Image
          width={150}
          height={150}
          style={styles.imageView}
          source={{ uri: DEFAULT_IMAGE_URI }}
        />
        <TouchableOpacity onPress={openSheet}>
          <Text style={styles.chooseText}>Chose Image</Text>
        </TouchableOpacity>

        <Input
          label="First Name"
          placeholder="Enter First Name"
          onChangeText={(value) => {
            onChangeText({ name: "firstName", value: value });
          }}
          error={error?.first_name?.[0]}
        />
        <Input
          label="Last Name"
          placeholder="Enter Last Name"
          onChangeText={(value) => {
            onChangeText({ name: "lastName", value: value });
          }}
          error={error?.last_name?.[0]}
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
          error={error?.phone_number?.[0]}
          label="Phone Number"
          placeholder="Enter Phone Number"
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 10,
          }}
        >
          <Text style={{ fontSize: 17 }}>Add to favourites</Text>
          <Switch
            trackColor={{ false: "grey", true: colors.primary }}
            thumbColor="#FFFFFF"
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleValueChange}
            value={form.isFavorite}
          />
        </View>

        <CustomButton
          loading={loading}
          disabled={loading}
          primary
          title="Submit"
          onPress={onSubmit}
        />
      </Container>
      <ImagePicker ref={sheetRef} />
    </View>
  );
};

export default CreateContactComponent;
