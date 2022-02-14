import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
  logoImage: {
    height: 150,
    width: 150,
    alignSelf: "center",
    marginTop: 50,
  },
  title: {
    fontSize: 21,
    textAlign: "center",
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 17,
    textAlign: "center",
    paddingVertical: 10,
    fontWeight: "bold",
  },
  form: {
    paddingVertical: 20,
  },
  createSection: {
    flexDirection: "row",
  },
  infoBtn: {
    paddingLeft: 17,
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 16,
  },
  infoText: {
    fontSize: 17,
  },
});
