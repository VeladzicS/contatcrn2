import React from "react";
import { View, Text, Image } from "react-native";
import Container from "../common/Container";
import styles from "./styles";
import CustomButton from "../common/CustomButton";
import Input from "../common/Input";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { LOGIN } from "../../constants/routeNames";
import CustomMessage from "../common/Message";

const RegisterComponent = ({
  onSubmit,
  onChange,
  errors,
  loading,
  error,
  form,
}) => {
  const { navigate } = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = React.useState(true);
  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require("../../assets/images/logo.png")}
        style={styles.logoImage}
      />

      <View style={styles.form}>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subtitle}>Please register here</Text>

        {error?.error && (
          <CustomMessage
            retry
            danger
            retryFn={onSubmit}
            message={error?.error}
          />
        )}

        <View style={styles.form}>
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            error={errors.userName || error?.username?.[0]}
            onChangeText={(value) => {
              onChange({ name: "userName", value });
            }}
          />

          <Input
            label="First Name"
            iconPosition="right"
            placeholder="Enter First name"
            onChangeText={(value) => {
              onChange({ name: "firstName", value });
            }}
            error={errors.firstName || error?.first_name?.[0]}
          />

          <Input
            label="Last Name"
            iconPosition="right"
            placeholder="Enter Last Name"
            error={errors.lastName || error?.last_name?.[0]}
            onChangeText={(value) => {
              onChange({ name: "lastName", value });
            }}
          />

          <Input
            label="Email"
            iconPosition="right"
            placeholder="Enter Email"
            error={errors.email || error?.email?.[0]}
            onChangeText={(value) => {
              onChange({ name: "email", value });
            }}
          />

          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={isSecureEntry}
            icon={
              <TouchableOpacity
                onPress={() => setIsSecureEntry((prev) => !prev)}
              >
                <Text> {isSecureEntry ? "Show" : "Hide"}</Text>
              </TouchableOpacity>
            }
            iconPosition="right"
            error={errors.password || error?.password?.[0]}
            onChangeText={(value) => {
              onChange({ name: "password", value });
            }}
          />

          <Input
            label="Repeat Password"
            placeholder="Enter Password"
            secureTextEntry={isSecureEntry}
            icon={
              <TouchableOpacity
                onPress={() => setIsSecureEntry((prev) => !prev)}
              >
                <Text> {isSecureEntry ? "Show" : "Hide"}</Text>
              </TouchableOpacity>
            }
            iconPosition="right"
            error={errors.repeatPassword}
            onChangeText={(value) => {
              onChange({ name: "repeatPassword", value });
            }}
          />
          <CustomButton
            loading={loading}
            disabled={loading}
            title="Submit"
            primary
            onPress={onSubmit}
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have account ?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}
            >
              <Text style={styles.infoBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
