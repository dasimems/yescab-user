import { Text, TouchableOpacity, View } from "react-native";
import { lato } from "../../fonts";
import { primaryColor, whiteColor } from "../../assets/colors";
import { ArrowRight } from "../../assets/icons";
import Button from "../general/Button";
import { NavNames, measurements } from "../../data/general";
import { useNavigation, useRoute } from "@react-navigation/native";

const GettingStartedFooter = () => {
  const { name } = useRoute();
  const { navigate } = useNavigation();

  function checkIfGettingStartedOne() {
    return name === NavNames.GettingStarted.name;
  }

  return (
    <View
      style={{
        width: "100%",
        paddingVertical: checkIfGettingStartedOne()
          ? measurements.windowWidth * 0.35
          : measurements.windowWidth * 0.1,
        paddingBottom: measurements.windowWidth * 0.1,
        paddingHorizontal: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigate(NavNames.Login.name);
        }}
      >
        <Text
          style={{
            fontFamily: lato.regular.default,
            color: primaryColor.opacity500
          }}
        >
          Skip
        </Text>
      </TouchableOpacity>

      <Button
        onPress={() => {
          if (checkIfGettingStartedOne()) {
            navigate(NavNames.GettingStarted2.name);
          } else {
            navigate(NavNames.Login.name);
          }
        }}
        style={{
          width: 50,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: primaryColor.default,
          borderRadius: 1000
        }}
      >
        <ArrowRight color={whiteColor.default} />
      </Button>
    </View>
  );
};

export default GettingStartedFooter;
