import { Text, TouchableOpacity, View } from "react-native";
import { lato } from "../../fonts";
import { primaryColor, whiteColor } from "../../assets/colors";
import { ArrowRight } from "../../assets/icons";
import Button from "../general/Button";
import { measurements } from "../../data/general";



const GettingStartedFooter = () => {
    return(

        <View style={{
        width: "100%",
        paddingVertical: measurements.windowWidth * 0.35    ,
        paddingBottom: measurements.windowWidth * 0.1,
        paddingHorizontal: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

      }}>
        <TouchableOpacity>
          <Text style={{
            fontFamily: lato.regular.default,
            color: primaryColor.opacity500
          }}>Skip</Text>
        </TouchableOpacity>

        <Button style={{
          width: 50,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: primaryColor.default,
          borderRadius: 1000
        }}>
          <ArrowRight color={whiteColor.default} />
        </Button>
      </View>

    )
    
}

export default GettingStartedFooter;