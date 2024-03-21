import { Platform } from "react-native";
import colors from "../../config/colors";

export default {
  text: {
    ...Platform.select({
      ios: {
        color: colors.dark,
        fontSize: 18,
        fontFamily: "Avenir Next",
      },
      android: {
        color: colors.dark,
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
};
