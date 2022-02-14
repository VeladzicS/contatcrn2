import { StyleSheet } from "react-native";
import colors from "../../../assets/theme/colors";

export default StyleSheet.create({
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 5,
    paddingHorizontal: 5,
  },
  inputContainer: {
    paddingVertical: 5,
  },
  textInput: {
    flex: 1,
    textAlign: "left",
    width: "100%",
  },

  error: {
    color: colors.danger,
    paddingTop: 5,
    fontSize: 12,
    fontWeight: "bold",
  },
});
