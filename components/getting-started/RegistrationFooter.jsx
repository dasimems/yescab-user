import { Text, TouchableOpacity, View } from "react-native";
import { lato } from "../../fonts";
import { primaryColor, whiteColor } from "../../assets/colors";
import { ArrowRight } from "../../assets/icons";
import Button from "../general/Button";
import { NavNames, measurements } from "../../data/general";
import { useNavigation, useRoute } from "@react-navigation/native";

const RegistrationFooter = ({next, skipAction}) => {
  const { name } = useRoute();
  const { navigate } = useNavigation();

  

  if(!next){
    next = name
  }

  return (
    <View
      style={{
        width: "100%",
        paddingVertical:  measurements.windowWidth * 0.08,
        paddingHorizontal: 30,
        flexDirection: "row",
        justifyContent: skipAction?"space-between" : "flex-end",
        alignItems: "center",
        gap: 20
      }}
    >

      {skipAction && <TouchableOpacity onPress={skipAction}>
        <Text style={{
            fontFamily: lato.regular.default,
            color: primaryColor.opacity500
        }}>Skip</Text>
      </TouchableOpacity>}
      

      <Button
        onPress={() => {
          navigate(next);
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

export default RegistrationFooter;
